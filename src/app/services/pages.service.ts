import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: "root",
})
export class PageService {

  public _url: string = environment.adresseServeur ;

  constructor(private http: HttpClient) {  }



    ajouterAbsence(body:any): Observable<any> {
      return this.http.post(this._url + 'admin/parametrage/agents', body);
    }

  }
