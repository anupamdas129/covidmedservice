import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatentDetails } from '../../models/patentdetails.model';

@Injectable({
  providedIn: 'root'
})
export class PatentDetailsService {


  url ='http://localhost:3000/patentdetails';
  constructor(private http :HttpClient) { }

  addPatentDetails(patentpetails: PatentDetails){
    return this.http.post(this.url,patentpetails);
  }
  getPatentDetails(){
    return this.http.get(this.url);
  }
  getPatentDetailsId(id:any){
    return this.http.get(`${this.url}/${id}`,);
  }
  updatePatentDetails(patentpetails: PatentDetails){
    return this.http.put(`${this.url}/${patentpetails._id}`,patentpetails)
  }
  deletePatentDetails(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}

