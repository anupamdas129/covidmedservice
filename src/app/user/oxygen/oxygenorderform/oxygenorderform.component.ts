import { Component, OnInit } from '@angular/core';
import { OxygenmanageComponent } from 'src/app/admin/oxygenmanage/oxygenmanage.component';
import { OxybookserviceService } from 'src/app/admin/services/oxyBookService/oxybookservice.service';
import { OxyquentService } from 'src/app/admin/services/oxyquentityservice/oxyquent.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { UserService } from '../../service/userDbservice/user.service';
import {OxygenQuentity} from 'src/app/admin/models/oxyquentity.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OxyDbserviceService } from '../../service/oxyDbservice/oxy-dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oxygenorderform',
  templateUrl: './oxygenorderform.component.html',
  styleUrls: ['./oxygenorderform.component.css']
})
export class OxygenorderformComponent implements OnInit {

  constructor(private auth:AuthService,private userService:UserService,private oxyQuent:OxyquentService,private fb:FormBuilder,private oxyDb:OxyDbserviceService,private router:Router) {this.getUser(); }

  oxyBookForm!:FormGroup;
  chacked:boolean = false;
  ngOnInit(): void {
    this.getUser();
    this.getOxy();

    this.oxyBookForm=this.fb.group({
      _id: [''],
      name:[''],
    email:[''],
    phno:[''],
    address:['',Validators.required],
    pin:['',[Validators.required,this.PinValidate.bind(this)]],
    andharNo:['',Validators.required],
    causeforOxy:['',Validators.required],
    CovidAuth:['false',Validators.required],
    })
  }
  Users!:User
  id = this.auth.getToken()
  notAllowdPin:string[]=['712409','7124101','7124010']
  PinValidate(control:FormControl){//['','','',]
    if(this.notAllowdPin.lastIndexOf(control.value)==-1){
      return{'PinIsNotAllowed':true};
    }
    return null;
  }

  getUser(){
    this.userService.getUseById(this.id).subscribe((res:any) => {
      this.Users = res;
      this.oxyBookForm.get('name')?.setValue(this.Users.name)
      this.oxyBookForm.get('email')?.setValue(this.Users.email)
      this.oxyBookForm.get('phno')?.setValue(this.Users.phno)
    });
  }
  Oxy:OxygenQuentity[]=[]
  getOxy(){
    this.oxyQuent.getOxyList().subscribe(
      (res:any)=>{
        this.Oxy=res;
      },
      (err)=>{
        alert(err.message)
      }
    )
  }
  onSubmit(){
    this.getUser();
    this.getOxy()
    
    if(this.oxyBookForm.valid && this.chacked){
    if(window.confirm("this only Rs:2000 only by cash on delevery.Are you want to continue?")){
    for(var list of this.Oxy){
      if(list.quentity>0){
      list.quentity=list.quentity-1;
      this.oxyQuent.updateOxy(list).subscribe(
        (res)=>{
          console.log(res)
        },
        (err)=>{
          alert(err.message)
        }
      )
    }else{
      alert("TOTAL IS LESS THAN REMOVE");
    }
    }
    this.oxyDb.addoxy(this.oxyBookForm.value).subscribe(
      (res)=>{
        this.router.navigate(['/user/oxygen']);
        console.log(res)
      },
      (err)=>{
        alert(err.message)
      }
    )

    }
  }
}
}


