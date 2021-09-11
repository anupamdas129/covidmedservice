import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/doctor/service/auth/auth.service';

@Component({
  selector: 'app-headerdoctor',
  templateUrl: './headerdoctor.component.html',
  styleUrls: ['./headerdoctor.component.css']
})
export class HeaderdoctorComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
}
}
