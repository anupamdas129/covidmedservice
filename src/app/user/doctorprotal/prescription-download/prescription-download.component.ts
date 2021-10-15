import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prescriptionModel } from 'src/app/doctor/dcModels/prescription.model';
import { PrescriptionDbService } from 'src/app/doctor/service/prescriptionDB/prescription-db.service';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-prescription-download',
  templateUrl: './prescription-download.component.html',
  styleUrls: ['./prescription-download.component.css']
})
export class PrescriptionDownloadComponent implements OnInit {
  id!:string;
  constructor(private route: ActivatedRoute,private prescriptiondb:PrescriptionDbService) {
    this.id=String(this.route.snapshot.paramMap.get('id'));
    this.getpriscription()
   }

  ngOnInit(): void {

  }
  getuserpres:prescriptionModel={
    _id: '',
    name: '',
    dname: '',
    email: '',
    phno: 0,
    age: 0,
    covidAuth: '',
    fever: '',
    temperature: 0,
    symptomdetails: '',
    problemdate:  new Date(),
    medicine: '',
    date:  new Date()
  }
  getpriscription(){
    this.prescriptiondb.getPrescriptionById(this.id).subscribe((res:any)=>{
      this.getuserpres = res;
      console.log(this.getuserpres)
    })
  }
  @ViewChild('content',{static: false}) el!: ElementRef;
  download(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("prescription.pdf");
      }
    })
  }
}
