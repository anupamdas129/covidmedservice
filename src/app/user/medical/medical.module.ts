import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalHomeComponent } from './medical-home/medical-home.component';


@NgModule({
  declarations: [
    MedicalHomeComponent
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule
  ]
})
export class MedicalModule { }
