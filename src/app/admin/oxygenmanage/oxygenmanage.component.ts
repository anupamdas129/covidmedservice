import { Component, OnInit } from '@angular/core';
import { Oxybook } from 'src/app/user/models/oxybook.model';
import { AuthService } from 'src/app/user/service/authservice/auth.service';
import { OxyDbserviceService } from 'src/app/user/service/oxyDbservice/oxy-dbservice.service';
import { UserService } from 'src/app/user/service/userDbservice/user.service';
import { OxygenQuentity } from '../models/oxyquentity.model';
import { OxybookserviceService } from '../services/oxyBookService/oxybookservice.service';
import { OxyquentService } from '../services/oxyquentityservice/oxyquent.service';

@Component({
  selector: 'app-oxygenmanage',
  templateUrl: './oxygenmanage.component.html',
  styleUrls: ['./oxygenmanage.component.css']
})
export class OxygenmanageComponent implements OnInit {
  
  constructor(private oxyQuent:OxyquentService,private oxybook:OxybookserviceService,private oxyDb:OxyDbserviceService) { this.getOxy(); }
Oxy:OxygenQuentity[]=[]
  add!:number;
  remove!:number;
  getOxy(){
    this.oxyQuent.getOxyList().subscribe(
      (res:any)=>{
        this.Oxy=res;
        for(var list of this.Oxy){
          this.recentOxy=list.quentity;
        }
      },
      (err)=>{
        alert(err.message)
      }
    )
  }
  setOxy(){
    this.getOxy();
    
  }
  recentOxy!:number;
addOxy(){
  this.getOxy();
  for(var list of this.Oxy){
    list.quentity=list.quentity+this.add;
    this.setOxy();
    this.oxyQuent.updateOxy(list).subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        alert(err.message)
      }
    )
  }
}
  ngOnInit(): void { 
    this.getoxy();

  }

  removeOxy(){
    this.getOxy();
  for(var list of this.Oxy){
    if(this.remove<list.quentity){
    list.quentity=list.quentity-this.remove;
    this.setOxy()
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
  }
  oxyUse:Oxybook[]=[];
  revoxyUseThis:Oxybook[]=[];
  oxyUseThis:Oxybook[]=[];

 delevery:boolean=false;
  getoxy(){
    this.oxyDb.getoxylist().subscribe(
      (res:any)=>{
        this.oxyUse = res;
        this.revoxyUseThis = this.oxyUse.reverse()
        console.log(this.revoxyUseThis)
      }
    )
    
  }


}
