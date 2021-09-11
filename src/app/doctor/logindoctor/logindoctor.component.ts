import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/doctor/service/auth/auth.service';

@Component({
  selector: 'app-logindoctor',
  templateUrl: './logindoctor.component.html',
  styleUrls: ['./logindoctor.component.css']
})
export class LogindoctorComponent implements OnInit {
    loginForm = new FormGroup({
      uname: new FormControl(''),
      password: new FormControl(''),
    })
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/doctor/homedoctor']);
    }
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/doctor/homedoctor']);
        },
        (err:Error) =>{
          alert(err.message);
        }
      )
    
  }
  }
}
