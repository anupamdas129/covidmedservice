import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'aboutpage',component:AboutpageComponent},
  {path: 'doctorportal', loadChildren:()=>
  import('./doctorprotal/doctorprotal.module').then((m: { DoctorprotalModule: any; }) => m.DoctorprotalModule)},
  {path: 'oxygen', loadChildren:()=>
  import('./oxygen/oxygen.module').then((m: {OxygenModule : any; }) => m.OxygenModule)},
  {path: 'medical', loadChildren:()=>
  import('./medical/medical.module').then((m: {MedicalModule : any; }) => m.MedicalModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
