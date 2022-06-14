import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from "./pages.component";
import { PageAjouterAbsenceComponent } from './page-ajouter-absence/page-ajouter-absence.component';
import { PageGestionUtilisateurComponent } from './page-gestion-utilisateur/page-gestion-utilisateur.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageBilanComponent } from './page-bilan/page-bilan.component';
import { PageAjouterRetardComponent } from './page-ajouter-retard/page-ajouter-retard.component';
import { MatCardModule } from '@angular/material/card';
import { PagFormationComponent } from './pag-formation/pag-formation.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PageListeClassesComponent } from '../page-liste-classes/page-liste-classes.component';
import { PageBilanClasseComponent } from '../page-bilan-classe/page-bilan-classe.component';
import { PageService } from '../services/pages.service';


@NgModule({
  declarations: [
    PagesComponent,
    PageAjouterAbsenceComponent,
    PageGestionUtilisateurComponent,
    PageInscriptionComponent,
    PageBilanComponent,
    PageAjouterRetardComponent,
    PageProfilComponent, 
    PagFormationComponent,
    PageListeUtilisateurComponent,
    PageListeClassesComponent,
    PageBilanClasseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PagesRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,


  ],
  providers: [
    PageService
  ],
})
export class PagesModule { }
