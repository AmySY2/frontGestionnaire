import { ConnexionComponent } from './connexion/connexion.component';
import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.gard';


const routes: Routes = [

  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule) },
  { path: 'connexion', component: ConnexionComponent},
  { path: '**', redirectTo: '/connexion' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }














