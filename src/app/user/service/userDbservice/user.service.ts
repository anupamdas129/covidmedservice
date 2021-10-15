import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ='http://localhost:3000/user';
  constructor(private http :HttpClient) { }

  addUser(user: User){
    return this.http.post(this.url,user);
  }
  getUserlist(){
    return this.http.get(this.url);
  }
  getUseById(id:any){
    return this.http.get(`${this.url}/${id}`,);
  }
  updateUser(user: User){
    return this.http.put(`${this.url}/${user._id}`,user)
  }

}
