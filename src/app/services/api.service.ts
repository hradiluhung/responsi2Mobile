import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public http: HttpClient,
    public alertController: AlertController
  ) {}

  apiURL() {
    return 'http://localhost/api-daftar-mahasiswa';
  }

  //Daftar mahasiswa
  public daftarMahasiswa(data: any): Observable<any> {
    return this.http.post(this.apiURL() + '/tambah.php', data);
  }

  // Melihat list Mahasiswa
  public getAllData(link: any): Observable<any> {
    return this.http.get(this.apiURL() + link);
  }

  // Ganti status mahasiswa menjadi 0
  public nonAktifkanMahasiswa(id: any): Observable<any> {
    return this.http.get(this.apiURL() + '/nonaktifkanMahasiswa.php?id=' + id);
  }

  // Hapus Mahasiswa
  public hapusMahasiswa(id: any): Observable<any> {
    return this.http.get(this.apiURL() + '/deleteMahasiswa.php?id=' + id);
  }

  public message(message: string) {
    const alert = this.alertController.create({
      message: message,
      buttons: ['OK'],
    });

    alert.then((alert) => {
      alert.present();
    });
  }
}
