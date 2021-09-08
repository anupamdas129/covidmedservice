import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';

const routes: Routes = [
  {path: '',component:DoctorHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorprotalRoutingModule { }
