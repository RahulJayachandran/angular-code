import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { planService } from 'src/Services/plan.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(private fb:FormBuilder,private plnservice:planService) { }

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


        
      }
    );
  }

}
