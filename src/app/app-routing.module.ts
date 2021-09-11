import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user', loadChildren:()=>
  import('./user/user.module').then((m: { UserModule: any; }) => m.UserModule)},
  {
    path:'',redirectTo:'/user',pathMatch:'full'
  },
  {path: 'admin', loadChildren:()=>
  import('./admin/admin.module').then((m: { AdminModule: any; }) => m.AdminModule)},
  {path: 'doctor', loadChildren:()=>
  import('./doctor/doctor.module').then((m: { DoctorModule: any; }) => m.DoctorModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function imports(arg0: string) {
  throw new Error('Function not implemented.');
}

