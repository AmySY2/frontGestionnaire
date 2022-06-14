import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { TokenIdentificationService } from './services/token-identification.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenIdentification : TokenIdentificationService,
    private router : Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //console.log("requete qui sort !")
    
  

    // let token: any = "";
    // const nouveauHeader = request.headers;//recuperer l'entete de la requette

    // if (localStorage.getItem('token') != null) {//si il est connecter, regarder si il existe
    //   token = "Bearer " + localStorage.getItem('token')
    //   nouveauHeader.set('Authorization', token)
    // }

    // nouveauHeader.set('Access-Control-Allow-Origin', '*')

    // const cloneRequete = request.clone(
    //   {headers : nouveauHeader}//les element que on veut changer
    // );

    // return next.handle(cloneRequete);

    

    let enTete;

    console.log("Utilisateur ", this.tokenIdentification.utilisateur?.value);

    if (localStorage.getItem('token') != null) {//recupère la valeur de mon observable :le corp du token
      
      //const timestamp = this.tokenIdentification.utilisateur.value.exp;
      // const dateExpiration = new Date(timestamp * 1000);
      // console.log(dateExpiration)
      // console.log(new Date())

      // if(dateExpiration <new Date()){
      //   this.tokenIdentification.deconnexion()
      //   this.router.navigateByUrl("connexion")
      //   console.log("Expire ! ")
      //   return EMPTY;
      // }


      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    } else {
      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }

    const requeteClone = request.clone({
      headers: enTete
    });
    
    return next.handle(requeteClone);
    
  }
}
