import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DisplayallemployeeComponent } from './componets/displayallemployee/displayallemployee.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  { path:'home',component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'details/:name',component:DetailsComponent},
  {path:'employee', component:DisplayallemployeeComponent},
  
  {path:'registration', component:RegistrationComponent},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
