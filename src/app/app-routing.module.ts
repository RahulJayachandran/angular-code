import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from './insurance/insurance.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PolicytypeComponent } from './policytype/policytype.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

const routes: Routes = [
  {path:'',redirectTo:'/registration',pathMatch:'full'},
  {path:"insurance",component:InsuranceComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"plans",component:PlansComponent},
  {path:"policytype",component:PolicytypeComponent},
  {path:"adminlayout",component:AdminlayoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
