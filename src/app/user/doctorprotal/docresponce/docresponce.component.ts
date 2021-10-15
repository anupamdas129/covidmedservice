import { Component, OnInit } from '@angular/core';

import { doctoLink } from 'src/app/doctor/dcModels/doctorLink.model';
import { DoctorLinkService } from 'src/app/doctor/service/sendLink/doctor-link.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-docresponce',
  templateUrl: './docresponce.component.html',
  styleUrls: ['./docresponce.component.css']
})
export class DocresponceComponent implements OnInit {

  constructor(private auth:AuthService,private sendlink:DoctorLinkService,private userService:UserService) { this.getuserEmail()
  }

  ngOnInit(): void {
    this.getLink()
  }
  doclinkList:doctoLink[]=[]
  links:doctoLink[]=[]
  revlinks:doctoLink[]=[]
  user:User[]=[];
  usermail!:string
  getuserEmail(){
    this.userService.getUserlist().subscribe((res:any)=>{
      this.user=res
      for (let item of this.user){
        if(item._id==this.auth.getToken()){
          this.usermail=item.email;
        }
      }
    })
  }

  getLink(){
    this.getuserEmail()
    this.sendlink.getLinklist().subscribe((res:any)=>{
      this.doclinkList=res
      for (let item of this.doclinkList){
        if(item.email==this.usermail){
          this.links.push(item)
        }
      }
      this.revlinks=this.links.reverse()

    })
  }
}
