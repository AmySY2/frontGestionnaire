import { EmailValidator } from '@angular/forms';
import {Role} from './Role';

export interface Utilisateur {
  id: number | undefined;
  nom:string;
  prenom:string;
  email:string;
  identifiant: string;
  motDePasse?: string;
  listeRole: Role[];
  profileImage: string;
}