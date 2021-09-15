import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userDbservice/user.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Users: User[] = [];
  constructor(private router: Router, private userService:UserService) {this.getUser();}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user']);
  }
  email: string[] = [];
  getUser(){
    this.userService.getUserlist().subscribe((res:any) => {
      this.Users = res;
    })
  }
  login({ email, password }: any): Observable<any> {
    this.getUser();
    for(var list of this.Users){
    if ( email == list.email&& password == list.password) {
      this.setToken(list._id);
      return of({ uname: list.name, emai:list.email});
    }}
    return throwError(new Error('Failed to login'))  
  }
}

