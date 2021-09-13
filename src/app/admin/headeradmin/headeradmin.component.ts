import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {

  constructor(private auth:AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
}
