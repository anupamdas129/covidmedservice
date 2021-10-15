import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oxybook } from '../../models/oxybook.model';

@Injectable({
  providedIn: 'root'
})
export class OxyDbserviceService {


  url ='http://localhost:3000/oxyuserdetails';
  constructor(private http :HttpClient) { }

  addoxy(oxybookser: Oxybook){
    return this.http.post(this.url,oxybookser);
  }
  getoxylist(){
    return this.http.get(this.url);
  }
  getoxyById(id:any){
    return this.http.get(`${this.url}/${id}`,);
  }
  updateoxy(oxybookser: Oxybook){
    return this.http.put(`${this.url}/${oxybookser._id}`,oxybookser)
  }
}
