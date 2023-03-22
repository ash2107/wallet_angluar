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
    SearchPipe
    
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
