import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { OxygenmanageComponent } from './oxygenmanage/oxygenmanage.component';
import { MedmanageComponent } from './medmanage/medmanage.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginadminComponent,
    HeaderadminComponent,
    HomeadminComponent,
    OxygenmanageComponent,
    MedmanageComponent,
    UsermanageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
