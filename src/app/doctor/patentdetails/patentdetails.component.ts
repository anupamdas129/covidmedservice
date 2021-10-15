import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatentDetails } from 'src/app/user/models/patentdetails.model';
import { PatentDetailsService } from 'src/app/user/service/patentDb/patentdetails-db.service';
import { PrescriptionDbService } from '../service/prescriptionDB/prescription-db.service';
import { DoctorLinkService } from '../service/sendLink/doctor-link.service';

@Component({
  selector: 'app-patentdetails',
  templateUrl: './patentdetails.component.html',
  styleUrls: ['./patentdetails.component.css']
})
export class PatentdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private patentDetail:PatentDetailsService,private fb:FormBuilder,private dlservice:DoctorLinkService,private prescription:PrescriptionDbService) { }
  treated:boolean=false;
  _id!:string;
  sendLink!:FormGroup;
  sendPrescription!:FormGroup;
  ngOnInit(): void {
   this._id=String(this.route.snapshot.paramMap.get('id'));
   this.getPatentDetail()
   this.sendLink=this.fb.group({
    _id: [''],
    name:[''],
    email:[''],
    videoLink:['',Validators.required],
    date:['',Validators.required]
   })
   this.sendPrescription=this.fb.group({
    name : [''],
    dname:['',Validators.required],
    email:[''],
    age:{type: Number},
    covidAuth:[''],
    fever:[''],
    temperature:{type: Number,default: 98.5},
    symptomdetails:[''],
    problemdate:[''],
    medicine:['',Validators.required],
   })
}
  

  patent: PatentDetails={
    _id: '',
    name: '',
    email: '',
    phno: 0,
    andharNo: 0,
    age: 0,
    covidAuth: '',
    fever: '',
    temperature: 0,
    symptomdetails: '',
    address: '',
    chackStst: false,
    date: new Date()
  };

  getPatentDetail(){
    this.patentDetail.getPatentDetailsId(this._id).subscribe((res:any)=>{
      this.patent = res
      this.sendLink.get('name')?.setValue(this.patent.name)
      this.sendLink.get('email')?.setValue(this.patent.email)
      this.sendPrescription.get('name')?.setValue(this.patent.name)
      this.sendPrescription.get('email')?.setValue(this.patent.email)
      this.sendPrescription.get('age')?.setValue(this.patent.age)
      this.sendPrescription.get('covidAuth')?.setValue(this.patent.covidAuth)
      this.sendPrescription.get('fever')?.setValue(this.patent.fever)
      this.sendPrescription.get('temperature')?.setValue(this.patent.temperature)
      this.sendPrescription.get('symptomdetails')?.setValue(this.patent.symptomdetails)
      this.sendPrescription.get('problemdate')?.setValue(this.patent.date)
    })
  }
  onSubmitLink(){
    if(this.sendLink.valid){this.dlservice.addLink(this.sendLink.value).subscribe((res)=>{
      console.log("success")
      this.sendLink.get('videoLink')?.setValue('')
      this.sendLink.get('date')?.setValue('')
    },
    
    (err)=>{
      alert(err.massage)
    })
  }
  }
  onSubmitPrescription(){
    if(this.sendPrescription.valid){

      this.prescription.addPrescription(this.sendPrescription.value).subscribe((res)=>{
        console.log(this.sendPrescription.value)
      this.sendPrescription.get('dname')?.setValue('')
      this.sendPrescription.get('medicine')?.setValue('')
      })

      this.patentDetail.getPatentDetailsId(this._id).subscribe((res:any)=>{
        this.patent = res
        this.patent.chackStst=true
        this.patentDetail.updatePatentDetails(this.patent).subscribe((res)=>{
          console.log(this.patent)
        },
        (err)=>{
          alert(err.massage)
        })
      })
    }
  }
}
