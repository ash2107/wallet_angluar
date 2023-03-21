import { Injectable , OnInit } from '@angular/core';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
   
  wallet: Wallet[] = [];

  constructor() { 
    this.wallet.push(new Wallet(1,"Ford",25000.0));
    this.wallet.push(new Wallet(3,"Kumar",1000.0));
    this.wallet.push(new Wallet(5,"Amit",2000.0));
    this.wallet.push(new Wallet(2,"India",5000.0));    
  }

  ngOnInit(): void {
    // Code to be executed when the component is initialized.
  }

  getAllWallet(): Wallet[] {
    return this.wallet;
  }

  addWallet(newWallet: Wallet): void {
    this.wallet.push(newWallet);
  }

  // updateWallet():void{
  //   console.log("Wallet Updated");
  // }

  // addFunds():void{
  //   console.log("Funds Tranfered");
  // }

}

  
