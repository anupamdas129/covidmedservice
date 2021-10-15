import { Component, OnInit } from '@angular/core';
import { prescriptionModel } from 'src/app/doctor/dcModels/prescription.model';
import { PrescriptionDbService } from 'src/app/doctor/service/prescriptionDB/prescription-db.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-prescription-link',
  templateUrl: './prescription-link.component.html',
  styleUrls: ['./prescription-link.component.css']
})
export class PrescriptionLinkComponent implements OnInit {

  constructor(private auth:AuthService,private userService:UserService,private prescriptiondb:PrescriptionDbService) { 
    this.getuserEmail();
    
    
  }

  ngOnInit(): void {
    this.getpres()
  }
  user:User[]=[];
  usermail!:string
  presmodel:prescriptionModel[]=[]
  getprascription:prescriptionModel[]=[]
  getrevprascription:prescriptionModel[]=[]
  getuserEmail(){
    
  }
  getpres(){
    this.userService.getUserlist().subscribe((res:any)=>{
      this.user=res
      for (let item of this.user){
        if(item._id==this.auth.getToken()){
          this.usermail=item.email;
          console.log(this.usermail)
        }
      }
      this.prescriptiondb.getPrescriptionlist().subscribe((res:any)=>{
        this.presmodel = res
        console.log(this.presmodel)
        for(let item of this.presmodel){
          if(item.email==this.usermail){
            this.getprascription.push(item)
          }
        }
        this.getrevprascription=this.getprascription.reverse();
        console.log(this.getrevprascription)
      })
    })
    
  }

}
