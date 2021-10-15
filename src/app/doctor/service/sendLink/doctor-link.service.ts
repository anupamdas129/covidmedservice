import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctoLink } from '../../dcModels/doctorLink.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorLinkService {


  url ='http://localhost:3000/doctorlink';
  constructor(private http :HttpClient) { }

  addLink(doctolink: doctoLink){
    return this.http.post(this.url,doctolink);
  }
  getLinklist(){
    return this.http.get(this.url);
  }
  getLinkById(id:any){
    return this.http.get(`${this.url}/${id}`,);
  }
}

