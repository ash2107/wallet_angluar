import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent {

  wallet:Wallet = new Wallet();
  fromId: any;
  toId: any;
  balance: any;
  errormsg?: string;
  msg?: string;

  constructor (private activatedRoute:ActivatedRoute, 
    private walletBackendService:WalletBackendService, private walletService:WalletService){}

  transferFunds(fromId:number, toId:number, balance:number){
    return this.walletBackendService.tranferFunds(fromId,toId,balance).subscribe(
      {
        next:(data) =>{
          this.msg = "Funds Tranfered Successfully";
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errormsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Funds Tranfered Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
  }
}
