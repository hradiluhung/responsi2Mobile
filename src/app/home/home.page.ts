import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nama: any; //init variable nama untuk namauser
  token: any;
  mahasiswaAktif: any = [];
  mahasiswaTidakAktif: any = [];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.loadToken();
    this.getMahasiswaAktif();
    this.getMahasiswaTidakAktif();
  }

  //cek sesi untuk mengambil nama user
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  daftarMahasiswa() {
    this.router.navigateByUrl('/daftar-mahasiswa');
  }

  nonAktifkanMahasiswa(id: any) {
    return this.api.nonAktifkanMahasiswa(id).subscribe({
      next: () => {
        this.api.message('Berhasil menonaktifkan mahasiswa');
        this.router.navigateByUrl('/home');
      },
    });
  }

  getMahasiswaAktif() {
    this.api.getAllData('/getMahasiswaAktif.php').subscribe((data) => {
      return (this.mahasiswaAktif = data);
    });
  }

  getMahasiswaTidakAktif() {
    this.api.getAllData('/getMahasiswaTidakAktif.php').subscribe((data) => {
      return (this.mahasiswaTidakAktif = data);
    });
  }

  hapusMahasiswa(id: any) {
    return this.api.hapusMahasiswa(id).subscribe({
      next: () => {
        this.api.message('Berhasil menghapus mahasiswa');
        this.router.navigateByUrl('/home');
      },
    });
  }
}
