import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorprotalRoutingModule } from './doctorprotal-routing.module';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorHeaderComponent } from './doctor-header/doctor-header.component';
import { DoctorFooterComponent } from './doctor-footer/doctor-footer.component';
import { PatentsymptomsComponent } from './patentsymptoms/patentsymptoms.component';
import { DocresponceComponent } from './docresponce/docresponce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocserviceComponent } from './docservice/docservice.component';
import { PrescriptionLinkComponent } from './prescription-link/prescription-link.component';
import { PrescriptionDownloadComponent } from './prescription-download/prescription-download.component';



@NgModule({
  declarations: [
    DoctorHomeComponent,
    DoctorHeaderComponent,
    DoctorFooterComponent,
    PatentsymptomsComponent,
    DocresponceComponent,
    DocserviceComponent,
    PrescriptionLinkComponent,
    PrescriptionDownloadComponent,
  ],
  imports: [
    CommonModule,
    DoctorprotalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class DoctorprotalModule { }
