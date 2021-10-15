import { Injectable } from '@angular/core';
import { OxygenQuentity } from '../../models/oxyquentity.model';
import { OxyquentService } from '../oxyquentityservice/oxyquent.service';

@Injectable({
  providedIn: 'root'
})
export class OxybookserviceService {
  Oxydata:OxygenQuentity[]=[]
  constructor(private OxyDb:OxyquentService) { }
  getOxy(){
    this.OxyDb.getOxyList().subscribe(
      (res:any)=>{
        this.Oxydata=res
      }
    )
  }
  bookOxydB(){
    this.getOxy()
    for(var list of this.Oxydata){
      list.quentity = list.quentity-1;
      this.OxyDb.updateOxy(list).subscribe(
        (res)=>{
          console.log("success")
        },
        (err)=>{
          alert(err.message)
        }
      )
    }
  }
  
  
}
