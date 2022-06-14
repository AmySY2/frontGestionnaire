import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private pageService: PageService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      numeroPoleEmploi: ['', Validators.required],
      numeroSecu: ['', Validators.required],
      document: ['']

    });
  }

  saveAjout(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;

    this.pageService.ajouterAbsence(this.form.value).subscribe(
      (response:any) => {
        console.log(response)
        this.loading = false;
        this.submitted = false
      },
      (error:Error) => {
        console.error(error.message)
        this.loading = false;
        this.submitted = false
      }
    )
  }

 
  

}
