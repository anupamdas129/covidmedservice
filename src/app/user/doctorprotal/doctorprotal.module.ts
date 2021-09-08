import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorprotalRoutingModule } from './doctorprotal-routing.module';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';


@NgModule({
  declarations: [
    DoctorHomeComponent
  ],
  imports: [
    CommonModule,
    DoctorprotalRoutingModule
  ]
})
export class DoctorprotalModule { }
