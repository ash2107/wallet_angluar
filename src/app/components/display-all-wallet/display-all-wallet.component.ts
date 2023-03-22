import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-all-wallet',
  templateUrl: './display-all-wallet.component.html',
  styleUrls: ['./display-all-wallet.component.css']
})
export class DisplayAllWalletComponent implements OnInit{

  wallet:Wallet[] = [];
  httpClient: any;
  msg?: string;
  errormsg?: string ;
  constructor ( private router:Router, private walletService:WalletService, private walletBackendService:WalletBackendService){}
  ngOnInit():void {
    this.wallet = this.walletService.getAllWallet();
    console.log(this.wallet);

    this.walletBackendService.getAllWallet().subscribe(
     { next:(data) => {
        console.log(data);
        this.wallet=data;
      },
      error:(error: any) =>{
        console.log(error);
      },
      complete:() =>{
        console.log("Request Completed...");
      }
    }
    )
        
  }
  deleteWallet(id?:number):void{
    this.walletBackendService.deleteWallet(id).subscribe({ 
      next:(data) => {
      console.log("Wallet Deleted");
      this.msg = "wallet of id " + id +" deleted ";
      this.errormsg = "";

      this.wallet =this.wallet.filter(
        (wlt) => wlt.id != id?true:false
        
      )
    },
    error:(error: any) =>{
      this.msg = "";
      this.errormsg = "Wallet could not be deleted";
      console.log("Wallet could not be deleted");
    },
    complete:() =>{
      console.log("Request Completed...");
    }
  });
    console.log("Wallet "+ id + " Deleted Successfully");
    
  }

  updateWallet(wlt:Wallet){
    console.log("Update Wallet "+ wlt);
    this.router.navigate(['update',wlt.id]);
  }
  query:string = "";


  

}


  // Wallet: Wallet[]=[];
  // constructor(private walletService:WalletService){} //DI
  //     ngOnInit():void{
           
  // this.Wallet=this.walletService.getAllWallet(); //load data from service
  
  //        }
// }
