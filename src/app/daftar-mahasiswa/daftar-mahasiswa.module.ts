import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarMahasiswaPageRoutingModule } from './daftar-mahasiswa-routing.module';

import { DaftarMahasiswaPage } from './daftar-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarMahasiswaPageRoutingModule,
  ],
  declarations: [DaftarMahasiswaPage],
})
export class DaftarMahasiswaPageModule {}
