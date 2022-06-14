import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenIdentificationService } from '../services/token-identification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  //besoin de service : crer un constructeur
  constructor(
    private tokenIdentification : TokenIdentificationService,
    private router : Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.tokenIdentification.utilisateur.value != null){
        return true;
      } 
      return this.router.parseUrl('/connexion');
    }
  
}
