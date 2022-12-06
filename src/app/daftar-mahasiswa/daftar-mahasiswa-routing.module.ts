import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarMahasiswaPage } from './daftar-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarMahasiswaPageRoutingModule {}
