
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatentDetails } from 'src/app/user/models/patentdetails.model';
import { PatentDetailsService } from 'src/app/user/service/patentDb/patentdetails-db.service';
import { PrescriptionDbService } from '../service/prescriptionDB/prescription-db.service';

@Component({
  selector: 'app-patentmanagement',
  templateUrl: './patentmanagement.component.html',
  styleUrls: ['./patentmanagement.component.css']
})
export class PatentmanagementComponent implements OnInit {

  constructor(private patentdetail:PatentDetailsService  ) { }
 
  ngOnInit(): void {
    this.getPstentlist()
  }

  patentlist:PatentDetails[]=[];
  patentlistrev:PatentDetails[]=[];
  getPstentlist(){
    this.patentdetail.getPatentDetails().subscribe((res:any)=>{
      this.patentlist=res;
      this.patentlist=this.patentlist.reverse();
      console.log(this.patentlist)
    })
  }

  onDelete(id:any){
    if(confirm('Do you want to delete this empolyee?')){
      this.patentdetail.deletePatentDetails(id).subscribe(res=>{
      console.log(res);
      this.getPstentlist()
    },
    (err)=>{
      alert(err.message);
    })}
    
  }

}
