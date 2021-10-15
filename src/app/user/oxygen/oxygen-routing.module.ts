import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOxygenOrderComponent } from './check-oxygen-order/check-oxygen-order.component';
import { OrderOxygenComponent } from './order-oxygen/order-oxygen.component';
import { OxygenHomeComponent } from './oxygen-home/oxygen-home.component';

const routes: Routes = [
  {path: '',component:OxygenHomeComponent},
  {path: 'order-oxygen',component:OrderOxygenComponent},
  {path: 'check-order',component:CheckOxygenOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OxygenRoutingModule { }
