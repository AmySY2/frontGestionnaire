import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class AuthService {

  public _url: string = environment.adresseServeur ;

  constructor(private http: HttpClient) {  }


  connexion(body: {identifiant: string, motDePasse: string}): Observable<any> {
    localStorage.removeItem('token')
    console.log('AuthService login ', body);
    return this.http.post(this._url + 'connexion', body).pipe(
      tap((auth:any) => {
        console.log("login resp auth", auth)
        localStorage.setItem('token', auth.token)
      }),
      map(res => {
        return res;
      })
    )
  }

  deconnexion(): void {
    console.log('AuthService logout ');
    //this.http.post(this._url + 'signout', {});
    localStorage.removeItem('token')
  }

  


}
