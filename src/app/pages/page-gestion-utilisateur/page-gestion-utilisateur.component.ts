import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenIdentificationService } from '../../services/token-identification.service';

@Component({
  selector: 'app-page-gestion-utilisateur',
  templateUrl: './page-gestion-utilisateur.component.html',
  styleUrls: ['./page-gestion-utilisateur.component.scss']
})

export class PageGestionUtilisateurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}