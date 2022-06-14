import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { AuthService } from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private httpClient: HttpClient, private authentificationService: AuthService) {}

  public ajoutNote(note: any, file?: File): Observable<any> {

    if (note.texte) {

      if (file) {
        const formData: any = new FormData();
        note.editeur = {id: note.editeur.id};
        formData.append('note', JSON.stringify(note));
        formData.append('file', file);

        return this.httpClient.post(environment + 'user/noteTexte-avec-fichier', formData, {
          reportProgress: true,
          observe: 'events'
        }).pipe(
          catchError(this.errorMgmt)
        );
      } else {
        this.authentificationService.deconnexion();
        return this.httpClient
          .post<string>(environment + 'user/noteTexte', note);
      }
    } else {
      return this.httpClient
        .post<string>(environment + 'user/noteListe', note);
    }
  }

  errorMgmt(error: HttpErrorResponse): Observable<string> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}