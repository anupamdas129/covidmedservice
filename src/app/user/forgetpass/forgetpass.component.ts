import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/userDbservice/user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forgetForm!: FormGroup;
  constructor(private fb: FormBuilder,private userService: UserService,private router:Router) { this.updatedPass()}
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
    emailValidate(control:FormControl){
      this.getEmaulList();
      if(this.notAllowdEmail.lastIndexOf(control.value)==-1){
        return{'emailIsNotAllowed':true};
      }
      return null;
    }

  ngOnInit(): void {
    this.forgetForm=this.fb.group({
      _id: [''],
      name:[''],
    email:['',[Validators.required,this.emailValidate.bind(this)]],
    phno:[''],
    password:['',Validators.required],
    })
  }
  updatedPass(){
    this.getUser();
      for(var list of this.Users){
        if(this.forgetForm.get('email')?.value==list.email)
        this.forgetForm.get('_id')?.setValue(list._id);
        this.forgetForm.get('name')?.setValue(list.name);
        this.forgetForm.get('phno')?.setValue(list.phno);
      }
    
  }
  onSubmit(){
    this.updatedPass()
    if(this.forgetForm.valid){
      this.userService.updateUser(this.forgetForm.value).subscribe(
        (res) => {
          this.router.navigate(['/user/login']);
          console.log("Success")
        },
        (err) =>{
          alert(err.message);
        }
      )
  }
}
}
