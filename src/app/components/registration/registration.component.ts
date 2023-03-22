import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  wallet: Wallet = new Wallet();
  submitted = false;

  constructor(private walletservice:WalletService, private walletBackendService:WalletBackendService) {}


  ngOnInit(): void {
  }

  submitForm(): void {
    this.walletservice.addWallet(this.wallet);
    this.wallet = new Wallet();
    this.submitted = true;
    // let wltPost: Observable<any>= this.walletBackendService.addWallet(this.wallet);

    // this.walletservice.addWallet(this.wallet);
    // console.log(this.wallet);

    let wltPost: Observable<any> = this.walletBackendService.addWallet(this.wallet);
    wltPost.subscribe(
      {
        next:(data) =>{
          
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errormsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Wallet Created Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
    

  }
  
}
