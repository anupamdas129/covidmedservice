import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth/auth.service';
import { User } from '../../models/user.model';
import { PatentDetailsService } from '../../service/patentDb/patentdetails-db.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-patentsymptoms',
  templateUrl: './patentsymptoms.component.html',
  styleUrls: ['./patentsymptoms.component.css']
})
export class PatentsymptomsComponent implements OnInit {

  constructor(private auth:AuthService,private userService:UserService,private fb: FormBuilder,private router:Router,private patentDetail:PatentDetailsService) { }
 
  patentForm!:FormGroup;
  ngOnInit(): void {
    this.getUser()

    this.patentForm=this.fb.group({
      _id: [''],
      name:[''],
      email:[''],
      phno:[''],
      andharNo:['',Validators.required],
      age:['',Validators.required],
      covidAuth:['Yes',Validators.required],
      fever:['Yes',Validators.required],
      temperature:[''],
      symptomdetails:['',Validators.required],
      address:['',Validators.required],
    }
    )
  }
  Users!:User;
  id = this.auth.getToken();
  getUser(){
    this.userService.getUseById(this.id).subscribe((res:any) => {
      this.Users = res;
      this.patentForm.get('name')?.setValue(this.Users.name);
      this.patentForm.get('email')?.setValue(this.Users.email);
      this.patentForm.get('phno')?.setValue(this.Users.phno);
    });
  }

  onSubmit(): void{
    if(!this.patentForm.get('temperature')?.value)
      {this.patentForm.get('temperature')?.setValue(98.5);}
    if(this.patentForm.valid){
      this.patentDetail.addPatentDetails(this.patentForm.value).subscribe(
        (res) => {
          this.router.navigate(['/user/doctorportal']);
          console.log(res)
        },
        (err) =>{
          alert(err.message);
        }
      )
    }
  }
}
