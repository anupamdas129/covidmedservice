import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OxygenRoutingModule } from './oxygen-routing.module';
import { OxygenHomeComponent } from './oxygen-home/oxygen-home.component';


@NgModule({
  declarations: [
    OxygenHomeComponent
  ],
  imports: [
    CommonModule,
    OxygenRoutingModule
  ]
})
export class OxygenModule { }
