import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator,Validators,AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {registrationService} from 'src/Services/Registration.service';
import { NgForm } from '@angular/forms';
import { registration } from 'src/Model/Registration.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private regservice:registrationService,private router:Router) { }

  ngOnInit(): void {
  }

  registrationform=this.fb.group({
    firstname:['',[Validators.required,Validators.minLength(3)]],
    lastname:['',[Validators.required]],
    address:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    dob:['',[Validators.required]],
    mobilenumber:['',[Validators.required]],
    Password:['',[Validators.required]],
    
  });

  //post

  registration: any ={};
  result : any;
  addcustomer()
  {
    debugger;
    console.log( this.registrationform.value);
    this.regservice.insertcustomerdata(this.registrationform.value).subscribe((data: any)=>{this.result=data,console.log(this.result)
    
      if(data !== "Some Error Occured!!!") {
        this.router.navigate(['insurance']);
      }
    });
    window.alert("Check wheather the details are correct");
  }

}
