import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/Services/login.service';
@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private AppComponent:AppComponent,private loginservice:LoginService,) { }

  ngOnInit(): void {
    debugger;
    this.loginservice.loginsessionvariable=false;
    
this.AppComponent.login();
  }

}
