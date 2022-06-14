import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token.interseptor';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthService } from './services/auth.service';
import { TokenIdentificationService } from './services/token-identification.service';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PagFormationComponent } from './pages/pag-formation/pag-formation.component';
import { PageListeUtilisateurComponent } from './pages/page-liste-utilisateur/page-liste-utilisateur.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageListeClassesComponent } from './page-liste-classes/page-liste-classes.component';
import { PageBilanClasseComponent } from './page-bilan-classe/page-bilan-classe.component';





@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [
    {provide : LocationStrategy, useClass : HashLocationStrategy},
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true},

    TokenIdentificationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

