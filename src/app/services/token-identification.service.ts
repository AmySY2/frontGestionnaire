import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({// Injectable dépendance, on va pouvire l'injecter
  providedIn: 'root'
})
export class TokenIdentificationService {

  constructor() { }

 // les observable
  public utilisateur : BehaviorSubject<any> = new BehaviorSubject(null);

  public raffraichir() {
    if (localStorage.getItem("token") != null){
      const token : any = localStorage.getItem("token") ;
      try{ //la valeur la l'orservable a changer et fait une alerte à tous les utilisateur et auron en vanleur ce qui est passé entre parenthèse
        this.utilisateur.next(JSON.parse(atob(token.split(".")[1])));
      }catch{
        this.utilisateur.next(null);
      }
    }
  }

  deconnexion(){
    localStorage.removeItem("token")
    this.utilisateur.next(null);
  }
}
