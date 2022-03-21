

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { loginService } from 'src/Services/login.service';
import { NgModule } from '@angular/core';
import { login } from 'src/Model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private logservice:loginService) { }

  ngOnInit(): void {
  }

  loginform=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required]],
    
  });

  //post

  login : any ={};
  result : any;
  
  loginuser()
  {
    console.log( this.loginform.value);
    this.logservice.insertlogin(this.loginform.value).subscribe(
      (data: any) => {
        this.result=data,console.log(this.result) 


        
      }
    );
  }
  

}
