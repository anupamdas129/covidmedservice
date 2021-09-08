import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user', loadChildren:()=>
  import('./user/user.module').then((m: { UserModule: any; }) => m.UserModule)},
  {
    path:'',redirectTo:'/user',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function imports(arg0: string) {
  throw new Error('Function not implemented.');
}

