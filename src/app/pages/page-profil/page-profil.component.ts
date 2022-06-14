import { TokenIdentificationService } from './../../services/token-identification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Utilisateur } from 'src/app/interfaces/Utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {

  idUtilisateur: number;
  private sub: Subscription;
  //utilisateur: Utilisateur;
  public utilisateur:any = {};

  constructor( private activateRoute : ActivatedRoute, private tokenIdentification : TokenIdentificationService, private utilisateurService : UtilisateurService) {
  }

  ngOnInit(): void {
    this.tokenIdentification.raffraichir();
    this.utilisateur = this.tokenIdentification.utilisateur.value
    console.log(this.utilisateur)
    // this.sub = this.activateRoute.params.subscribe
    // (params => {
    //   this.idUtilisateur = parseInt(params['id']);
    //   this.idUtilisateur.findOne(this.idUtilisateur).pipe(
    //     map((utilisateur:Utilisateur) => this.utilisateur = this.utilisateur)
    //   ).subscribe()
    //   });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  profil(id : number){

  }



}
