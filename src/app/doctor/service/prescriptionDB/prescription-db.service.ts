import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prescriptionModel } from '../../dcModels/prescription.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionDbService {
  url ='http://localhost:3000/prescription';
  constructor(private http :HttpClient) { }

  addPrescription(prescription:prescriptionModel){
    return this.http.post(this.url,prescription);
  }
  getPrescriptionlist(){
    return this.http.get(this.url);
  }
  getPrescriptionById(id:any){
    return this.http.get(`${this.url}/${id}`,);
  }
}
