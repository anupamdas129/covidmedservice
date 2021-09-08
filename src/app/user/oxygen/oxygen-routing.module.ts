import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OxygenHomeComponent } from './oxygen-home/oxygen-home.component';

const routes: Routes = [
  {path: '',component:OxygenHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OxygenRoutingModule { }
