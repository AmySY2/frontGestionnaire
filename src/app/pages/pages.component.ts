import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { TokenIdentificationService } from "../services/token-identification.service";

@Component({
  selector: "pages-app-root",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
})
export class PagesComponent {

  [x: string]: any;

  nom : string = "";
  public utilisateur:any = {};

  //title = 'client-demo';
  constructor(private router : Router, private tokenIdentification : TokenIdentificationService){}
  ngOnInit(){ //on va observer les donné
    this.tokenIdentification.raffraichir();
    this.utilisateur = this.tokenIdentification.utilisateur.value
    console.log(this.utilisateur)
  }


  logout(){

    this.tokenIdentification.deconnexion();
    this.router.navigate(['/connexion'])
  }

  hasRole(role: string){
    if (this.utilisateur && (this.utilisateur.roles.length !=0) && this.utilisateur.roles.includes(role)) {
      return true;
    } else {
      return false;
    }
  }



}
