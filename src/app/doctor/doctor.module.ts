import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderdoctorComponent } from './headerdoctor/headerdoctor.component';
import { HomedoctorComponent } from './homedoctor/homedoctor.component';


@NgModule({
  declarations: [
    LogindoctorComponent,
    HeaderdoctorComponent,
    HomedoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
