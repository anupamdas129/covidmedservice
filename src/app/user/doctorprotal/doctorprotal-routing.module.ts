import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocresponceComponent } from './docresponce/docresponce.component';
import { DocserviceComponent } from './docservice/docservice.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatentsymptomsComponent } from './patentsymptoms/patentsymptoms.component';
import { PrescriptionDownloadComponent } from './prescription-download/prescription-download.component';

const routes: Routes = [
  {path: '',component:DoctorHomeComponent},
  {path: 'symptom',component:PatentsymptomsComponent},
  {path: 'docres',component:DocserviceComponent},
  {path:'presdownload/:id',component:PrescriptionDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorprotalRoutingModule { }
