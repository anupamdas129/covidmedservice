import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './doctorgurd/auth.guard';
import { HomedoctorComponent } from './homedoctor/homedoctor.component';
import { LogindoctorComponent } from './logindoctor/logindoctor.component';
import { PatentdetailsComponent } from './patentdetails/patentdetails.component';
import { PatentmanagementComponent } from './patentmanagement/patentmanagement.component';

const routes: Routes = [
  {path: '',component:LogindoctorComponent},
  {path: 'homedoctor',canActivate:[AuthGuard],component:HomedoctorComponent},
  {path: 'patentmanage',canActivate:[AuthGuard],component:PatentmanagementComponent},
  {path: 'patentdetails/:id',canActivate:[AuthGuard],component:PatentdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
