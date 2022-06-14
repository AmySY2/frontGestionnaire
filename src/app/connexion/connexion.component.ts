import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../services/auth.service';
import { TokenIdentificationService } from '../services/token-identification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  public motDePasse: string = "";
  public formControl : FormGroup = this.formBuilder.group(
    {"identifiant":["",[Validators.required]],
    "motDePasse":["",[Validators.required]]}
  );

  constructor(private client: HttpClient,
    private router : Router,
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private tokenIdentification : TokenIdentificationService
  ) { }

  ngOnInit(): void {}

  onConnexion(): void {
    console.log("onConnexion")
    if (this.formControl.valid){
       const utilisateur = this.formControl.value;
      	this.authService.connexion(utilisateur)
          .subscribe(
            (resultat: any) => {
              console.log("onConnexion",resultat)
              if (resultat.erreur) {
                console.log("onConnexion 1")
                alert(resultat.erreur);
              } else {
                console.log("onConnexion 2")
                this.tokenIdentification.raffraichir();
                console.log("user", this.tokenIdentification.utilisateur?.value);
                this.router.navigateByUrl("");
              }
            },
            (error) => {
              console.log("onConnexion error ", error);
              alert(error);
            }
          )
    }
    // const enTete: HttpHeaders = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*'
    // });

    // if (this.formControl.valid){
    //   const utilisateur = this.formControl.value;

    //   this.client
    //     .post("http://"+ environment.adresseServeur +"/connexion", utilisateur)//adresseServeur est déclarer dens environnement
    //     .subscribe((resultat: any) => {
    //       if (resultat.erreur) {
    //         alert(resultat.erreur);
    //       } else {
    //         localStorage.setItem('token', resultat.token)
    //         this.tokenIdentification.raffraichir();
    //         this.router.navigateByUrl("");
    //       }
    //     }
    //   )
    // }
  }

}
