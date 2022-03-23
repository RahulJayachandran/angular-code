import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userrouter:Router,private loginservice:LoginService ,private AppComponent:AppComponent) { }

  

  emp:any={};
  loginstatus:any;
  loggedinempdetails:any={};
  ngOnInit() {
  }
err: any;
  doLogin()
  {
    //debugger;
    //console.log(this.emp);
    //Admin
    if(this.emp.email=="rahul@gmail.com" &&this.emp.password=="rahul")
    {
      debugger;
      this.loginservice.loginuservariable=false;
      sessionStorage.setItem('username','admin')
      //to check any user is logged in or not 
      this.loginservice.loginCheck();
      this.AppComponent.login();
     // localStorage.setItem("loginS", "true");
      this.userrouter.navigate(['/adminlayout']);

    }

    else if(this.emp!= null)
    {
       this.loginservice.empLogin(this.emp).subscribe((data)=>{
        this.loggedinempdetails=data as JSON;
        debugger;

         sessionStorage.setItem('username',this.loggedinempdetails.name);
          //to check any user is logged in or not 
      this.loginservice.loginCheck();
      debugger;
         if(data!='Invalid')
         {
           debugger;
        this.loginservice.loginuservariable=true;
          this.userrouter.navigate(['/employee']);
          
         }
         
     /*  else 
       {
        console.log(this.loggedinempdetails.text);
         debugger;
         this.userrouter.navigate(['/login']);
         this.err="Invalid Mobile No or Password!!!";
       }*/

       }, (error:HttpErrorResponse) => {                              //Error callback
       
        if(error.status==400)
        {
          this.userrouter.navigate(['/login']);
          //this.err= error.error.message;
          this.err="Invalid Mobile No or Password!!!";
        }
      });
      }
      else{
        this.err="Please enter valid creditianls!!!";
      }
  }

}