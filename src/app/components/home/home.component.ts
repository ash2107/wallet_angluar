import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  wallet:Wallet= new Wallet();
  name="";
  constructor(private router: Router){}
  displaydetails(){
    console.log("clicked");
  }
  addFunds(){
    this.router.navigate(['funds']);

  }

  withdrawFunds(){
    this.router.navigate(['withdrawFunds']);

  }

  transferFunds(){
    this.router.navigate(['transferFunds']);

  }

}
