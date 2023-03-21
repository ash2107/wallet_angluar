import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-all-wallet',
  templateUrl: './display-all-wallet.component.html',
  styleUrls: ['./display-all-wallet.component.css']
})
export class DisplayAllWalletComponent implements OnInit {
  wallet:Wallet[]=[];
  constructor(private walletService:WalletService){}
  ngOnInit(): void {
    this.wallet=this.walletService.getAllWallet();
  }
  

  // Wallet: Wallet[]=[];
  // constructor(private walletService:WalletService){} //DI
  //     ngOnInit():void{
           
  // this.Wallet=this.walletService.getAllWallet(); //load data from service
  
  //        }
}
