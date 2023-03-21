import { Component } from '@angular/core';

import { Wallet } from 'src/app/model/wallet';

import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    wallet:Wallet =new Wallet();

    constructor(private walletServce: WalletService){}

    submitForm(){
      console.log("hello");
    }
    onSubmit(){

    }
}
