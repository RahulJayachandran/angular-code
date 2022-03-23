import { Component, OnInit } from '@angular/core';
import { policyService } from 'src/Services/policytype.service'; 
import { NgForm } from '@angular/forms';
import { policytype} from 'src/Model/policytype.model';
import { FormBuilder,FormGroup,FormControl,Validator,Validators,AbstractControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-policytype',
  templateUrl: './policytype.component.html',
  styleUrls: ['./policytype.component.css']
})
export class PolicytypeComponent implements OnInit {

  constructor(private fb:FormBuilder,private polservice:policyService,private router:Router) { }

  ngOnInit(): void {
  }

  policyform=this.fb.group({
    
    MobileNumber:['',[Validators.required]],
    Email:['',[Validators.required,Validators.email]],
    
    
  });

  //post
  //object
  policytype :any={};
  result : any;
  addpolicytype()
  
  {
    debugger;
    console.log( this.policyform.value);
    this.polservice.insertpolicytype(this.policyform.value).subscribe((data: any)=>{
      debugger;
      
      this.result=data,console.log(this.result)
    
      
      window.alert(this.result);
      
    });
   // window.alert("policy added");
  }


}
