import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MedmanageComponent } from './medmanage/medmanage.component';
import { OxygenmanageComponent } from './oxygenmanage/oxygenmanage.component';
import { UsermanageComponent } from './usermanage/usermanage.component';

const routes: Routes = [
  {path: '',component:LoginadminComponent},
  {path: 'homeadmin',component:HomeadminComponent},
{path: 'medmanage',component:MedmanageComponent},
{path: 'oxygenmanage',component:OxygenmanageComponent},
{path: 'usermanage',component:UsermanageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
