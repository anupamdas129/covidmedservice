import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderdoctorComponent } from './headerdoctor/headerdoctor.component';
import { HomedoctorComponent } from './homedoctor/homedoctor.component';
import { PatentmanagementComponent } from './patentmanagement/patentmanagement.component';
import { PatentdetailsComponent } from './patentdetails/patentdetails.component';



@NgModule({
  declarations: [
    LogindoctorComponent,
    HeaderdoctorComponent,
    HomedoctorComponent,
    PatentmanagementComponent,
    PatentdetailsComponent,

  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
