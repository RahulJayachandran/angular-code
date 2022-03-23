import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator,Validators,AbstractControl } from '@angular/forms';
import { planService } from 'src/Services/plan.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {plan} from 'src/Model/plan.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private fb:FormBuilder,private plnservice:planService,private router:Router) { }

  ngOnInit(): void {
  }

  planform=this.fb.group({
    plantype:[''],
    planduration:[''],
    
  });


  //post

  login : any ={};
  result : any;
  
  addplan()
  {
    console.log( this.planform.value);
    this.plnservice.insertplan(this.planform.value).subscribe(
      (data: any) => {
        this.result=data,console.log(this.result) 

        if(data !== "Some Error Occured!!!") {
          this.router.navigate(['policytype']);
        }
        
      }
    );

   //window.alert("Your plan has been added");
  }

}
