import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { DetailsComponent } from './components/details/details.component';
// import { DisplayAllEmployeeComponent } from './components/display-all-employee/display-all-employee.component';
import { DisplayAllWalletComponent } from './components/display-all-wallet/display-all-wallet.component';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FundsComponent } from './components/funds/funds.component';
import { ShowAllWalletsComponent } from './components/show-all-wallets/show-all-wallets.component';
// import { TransferFundsComponent } from './compinents/transfer-funds/transfer-funds.component';
import { UpdateComponent } from './components/update/update.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    DetailsComponent,
    // DisplayAllEmployeeComponent,
    DisplayAllWalletComponent,
    SearchPipe,
    FundsComponent,
    ShowAllWalletsComponent,
    TransferFundsComponent,
    UpdateComponent,
    WithdrawFundsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
