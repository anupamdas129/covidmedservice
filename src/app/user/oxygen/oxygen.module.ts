import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OxygenRoutingModule } from './oxygen-routing.module';
import { OxygenHomeComponent } from './oxygen-home/oxygen-home.component';
import { OxygenHeaderComponent } from './oxygen-header/oxygen-header.component';
import { OxygenFooterComponent } from './oxygen-footer/oxygen-footer.component';
import { OrderOxygenComponent } from './order-oxygen/order-oxygen.component';
import { CheckOxygenOrderComponent } from './check-oxygen-order/check-oxygen-order.component';
import { OxygenorderformComponent } from './oxygenorderform/oxygenorderform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OxygenHomeComponent,
    OxygenHeaderComponent,
    OxygenFooterComponent,
    OrderOxygenComponent,
    CheckOxygenOrderComponent,
    OxygenorderformComponent
  ],
  imports: [
    CommonModule,
    OxygenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OxygenModule { }
