import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../service/authservice/auth.service';
import { UserService } from '../service/userDbservice/user.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  
  Users: User[] = [];

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private auth: AuthService,private router: Router,private userService:UserService) {}

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/user']);
    };
    // this.getUser();
  }
  // getUser(){
  //   this.userService.getUserlist().subscribe((res:any) => {
  //     this.Users = res;
  //     // console.log(this.Users);
  //     for (var item of this.Users){
  //       console.log(item.email);
  //       console.log(item.password)
  //     }
  //   })
  // }
  onSubmit(): void{
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/user']);
        },
        (err:Error) =>{
          alert(err.message);
        }
      )
    }
  }

}
