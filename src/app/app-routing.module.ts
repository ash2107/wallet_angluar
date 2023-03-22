import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
// import { DisplayAllEmployeeComponent } from './components/display-all-employee/display-all-employee.component';
import { DisplayAllWalletComponent } from './components/display-all-wallet/display-all-wallet.component';
import { FundsComponent } from './components/funds/funds.component';
// import { DisplayAllWalletComponent } from './components/display-all-wallet/display-all-wallet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowAllWalletsComponent } from './components/show-all-wallets/show-all-wallets.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';
import { UpdateComponent } from './components/update/update.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  { path:'home',component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'details/:name',component:DetailsComponent},
  {path:'wallet', component:DisplayAllWalletComponent},
  // {path:'employees',component:DisplayallemployeeComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'funds', component:FundsComponent},
  {path: 'withdrawFunds',component:WithdrawFundsComponent},
  {path: 'transferFunds', component:TransferFundsComponent},
  {path: 'show', component:ShowAllWalletsComponent},
  
  {path:'registration', component:RegistrationComponent},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
