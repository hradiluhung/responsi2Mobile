import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-mahasiswa',
  templateUrl: './daftar-mahasiswa.page.html',
  styleUrls: ['./daftar-mahasiswa.page.scss'],
})
export class DaftarMahasiswaPage implements OnInit {
  nama: any;
  daerah: any;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  onDaftarMahasiswa(form: any) {
    const data = {
      nama: this.nama,
      daerah: this.daerah,
      status: true,
    };

    console.log(data);

    return this.api.daftarMahasiswa(data).subscribe({
      next: () => {
        this.api.message('Berhasil mendaftarkan mahasiswa');
        this.router.navigateByUrl('/home');
      },
    });
  }

  onCancel() {
    this.router.navigateByUrl('/home');
  }
}
