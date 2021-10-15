import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OxygenQuentity } from '../../models/oxyquentity.model';

@Injectable({
  providedIn: 'root'
})
export class OxyquentService {
  url ='http://localhost:3000/oxyquent';
  constructor(private http:HttpClient) { }
  addOxy(Oxy:OxygenQuentity){
    return this.http.post(this.url,Oxy)
  }
  getOxyList(){
    return this.http.get(this.url)
  }
  updateOxy(Oxy:OxygenQuentity){
    return this.http.put(`${this.url}/${Oxy._id}`,Oxy)
  }
}
