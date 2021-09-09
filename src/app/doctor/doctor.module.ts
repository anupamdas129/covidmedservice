import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';


@NgModule({
  declarations: [
    LogindoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
