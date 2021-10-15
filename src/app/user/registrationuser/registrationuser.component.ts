import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../service/userDbservice/user.service';

@Component({
  selector: 'app-registrationuser',
  templateUrl: './registrationuser.component.html',
  styleUrls: ['./registrationuser.component.css']
})
export class RegistrationuserComponent implements OnInit {
  regForm!: FormGroup;

  constructor(
    private fb: FormBuilder,private userService: UserService,private router: Router
  ) { this.getUser();this.getEmaulList();}

  ngOnInit(): void {
    this.regForm=this.fb.group({
      _id: [''],
      name:['',Validators.required],
    email:['',[Validators.required,Validators.email,this.emailValidate.bind(this)]],
    phno:['',Validators.required],
    password:['',Validators.required],
    })
    
  }
  Users:User[]=[]
  getUser(){
    this.userService.getUserlist().subscribe((res:any) => {
      this.Users = res;
    })}
  notAllowdEmail:string[]=[]
  getEmaulList(){
    this.getUser();
    for(var list of this.Users){
    this.notAllowdEmail.push(list.email)
    }
  }
  emailValidate(control:FormControl){//['','','',]
    this.getEmaulList();
    if(this.notAllowdEmail.lastIndexOf(control.value)!==-1){
      return{'emailIsNotAllowed':true};
    }
    return null;
  }

  onSubmit() {
    this.getEmaulList();
    if(this.regForm.valid){
      this.userService.addUser(this.regForm.value).subscribe(
        (res) => {
          this.router.navigate(['/user/login']);
          console.log(res)
        },
        (err) =>{
          alert(err.message);
        }
      )
    }
    }

}
