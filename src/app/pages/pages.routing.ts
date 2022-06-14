import { PageModifierProfilComponent } from './page-modifier-profil/page-modifier-profil.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageAjouterAbsenceComponent } from './page-ajouter-absence/page-ajouter-absence.component';
import { PagesComponent } from './pages.component';
import { PageGestionUtilisateurComponent } from './page-gestion-utilisateur/page-gestion-utilisateur.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { PageBilanComponent } from './page-bilan/page-bilan.component';
import { PageAjouterRetardComponent } from './page-ajouter-retard/page-ajouter-retard.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { PageListeUtilisateurComponent } from './page-liste-utilisateur/page-liste-utilisateur.component';
import { PagFormationComponent } from './pag-formation/pag-formation.component';
import { PageListeClassesComponent } from '../page-liste-classes/page-liste-classes.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PagesComponent,
        children: [
          {path: 'ajouter-absence', component:PageAjouterAbsenceComponent},
          {path: 'ajouter-retard', component:PageAjouterRetardComponent},
          {path: 'bilan', component:PageBilanComponent},
          {path: 'inscription', component:PageInscriptionComponent},
          {path: 'gestion-utilisateur', component:PageGestionUtilisateurComponent},
          {path: 'profil', component:PageProfilComponent},
          {path: 'modifier-profil', component : PageModifierProfilComponent},
          {path:'liste-utilisateur', component:PageListeUtilisateurComponent},
          {path: 'formarion', component: PagFormationComponent},
          {path: 'liste-classes', component: PageListeClassesComponent},
          {path: 'bilan-classe', component: PageBilanComponent}

        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
