import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admingurds/auth.guard';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MedmanageComponent } from './medmanage/medmanage.component';
import { OxygenmanageComponent } from './oxygenmanage/oxygenmanage.component';
import { UsermanageComponent } from './usermanage/usermanage.component';

const routes: Routes = [
  {path: '',component:LoginadminComponent},
  {path: 'homeadmin',canActivate:[AuthGuard],component:HomeadminComponent},
{path: 'medmanage',canActivate:[AuthGuard],component:MedmanageComponent},
{path: 'oxygenmanage',canActivate:[AuthGuard],component:OxygenmanageComponent},
{path: 'usermanage',canActivate:[AuthGuard],component:UsermanageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
