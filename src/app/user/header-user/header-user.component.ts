import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice/auth.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
  
  constructor(private auth:AuthService) { }
  show:boolean = !this.auth.isLoggedIn();
  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
  }
}
