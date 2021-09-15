import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegistrationuserComponent } from './registrationuser/registrationuser.component';
import { AuthGuard } from './usergurd/authgurd/auth.guard';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'aboutpage',component:AboutpageComponent},
  {path: 'login',component:LoginuserComponent},
  {path: 'register',component:RegistrationuserComponent},
  {path: 'doctorportal',canActivate:[AuthGuard], loadChildren:()=>
  import('./doctorprotal/doctorprotal.module').then((m: { DoctorprotalModule: any; }) => m.DoctorprotalModule)},
  {path: 'oxygen',canActivate:[AuthGuard], loadChildren:()=>
  import('./oxygen/oxygen.module').then((m: {OxygenModule : any; }) => m.OxygenModule)},
  {path: 'medical',canActivate:[AuthGuard], loadChildren:()=>
  import('./medical/medical.module').then((m: {MedicalModule : any; }) => m.MedicalModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
