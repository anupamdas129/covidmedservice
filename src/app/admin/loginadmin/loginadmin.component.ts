import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/admin/homeadmin']);
    }
  }

  onSubmit(): void{
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/admin/homeadmin']);
        },
        (err:Error) =>{
          alert(err.message);
        }
      )
    }
  }

}
