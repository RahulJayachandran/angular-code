import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComponent } from './insurance/insurance.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { insuranceService } from 'src/Services/insurance.service';
import { RegistrationComponent } from './registration/registration.component';
import { registrationService } from 'src/Services/Registration.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from 'src/Services/login.service';
import { planService } from 'src/Services/plan.service';
import { PlansComponent } from './plans/plans.component';
import { PolicytypeComponent } from './policytype/policytype.component';
import { policyService } from 'src/Services/policytype.service';
import { PaymentComponent } from './payment/payment.component';
import { paymentService } from 'src/Services/payment.service';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { HomeComponent } from './home/home.component';
import { PremiumcalculatorComponent } from './calculate-insurance/premiumcalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent,
    RegistrationComponent,
    LoginComponent,
    PlansComponent,
    PolicytypeComponent,
    PaymentComponent,
    AdminlayoutComponent,
    HomeComponent,
    PremiumcalculatorComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [insuranceService,registrationService,LoginService,planService,policyService,paymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
