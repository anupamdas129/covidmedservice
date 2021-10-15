import { Component, OnInit } from '@angular/core';
import { Oxybook } from '../../models/oxybook.model';
import { User } from '../../models/user.model';
import { AuthService } from '../../service/authservice/auth.service';
import { OxyDbserviceService } from '../../service/oxyDbservice/oxy-dbservice.service';
import { UserService } from '../../service/userDbservice/user.service';

@Component({
  selector: 'app-check-oxygen-order',
  templateUrl: './check-oxygen-order.component.html',
  styleUrls: ['./check-oxygen-order.component.css']
})
export class CheckOxygenOrderComponent implements OnInit {

  constructor(private oxyDb:OxyDbserviceService,private auth:AuthService,private userService:UserService) {
    this.getoxy();
  }

  ngOnInit(): void {
    
  }
  oxyUse:Oxybook[]=[];
  revoxyUseThis:Oxybook[]=[];
  oxyUseThis:Oxybook[]=[];
  Users:User={
    _id: '',
    name: '',
    email: '',
    phno: 0,
    password: ''
  }
  id = this.auth.getToken()
  getoxy(){
    this.userService.getUseById(this.id).subscribe((res:any) => {
      console.log(res)
      this.Users=res;

      this.oxyDb.getoxylist().subscribe(
        (res:any)=>{
          this.oxyUse=res;
          this.revoxyUseThis=this.oxyUse.reverse();
          for(var list of this.revoxyUseThis){
          if(this.Users.email==list.email){
            this.oxyUseThis.push(list)
          }
        }
        for (var list of this.oxyUseThis){
          console.log(list.date)
        }
        }
        )
    });
  
  }
}
