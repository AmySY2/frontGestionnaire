import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../interfaces/Utilisateur';
import { environment } from 'src/environments/environment';

export interface UserData {
  items: Utilisateur[],
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  },
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  }
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public readonly utilisateurConnecte$: BehaviorSubject<Utilisateur | undefined> =
    new BehaviorSubject<Utilisateur| undefined>(undefined);

  constructor(private httpClient: HttpClient) {}

  public updateUtilisateur(force?: boolean): void {

    if (this.utilisateurConnecte$.value === undefined || force) {

      this.httpClient
              .get<Utilisateur>(environment.adresseServeur + '/utilisateur')
              .subscribe(
                (valeurRetourne: Utilisateur) => {
                  this.utilisateurConnecte$.next(valeurRetourne);
                },
                () => {},
                () => {}
              );
    }

  }
/*
  findOne(id : number):Observable<Utilisateur> {
    return this.httpClient.get('/utilisateur/'+id).
    pipe(
      map((utilisateur : Utilisateur ) => utilisateur)
      )
  }


  findAll(page: number, size: number): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.httpClient.get('/utilisatuer/:id', {params}).pipe(
      map((userData : UserData ) => userData),
      catchError(err => throwError(err))
    )
  }

  findAll(page: number, size: number): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.httpClient.get('/list-utilisatuer', {params}).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err))
    )
  }

  paginateByName(page: number, size: number, username: string): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('username', username);

    return this.httpClient.get('/utilisateur', {params}).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err))
    )
  }
*/
}
