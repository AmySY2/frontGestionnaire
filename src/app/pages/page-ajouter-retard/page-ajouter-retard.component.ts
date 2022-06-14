import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-page-ajouter-retard',
  templateUrl: './page-ajouter-retard.component.html',
  styleUrls: ['./page-ajouter-retard.component.scss']
})
export class PageAjouterRetardComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  loading = false;

  constructor( private formBuilder: FormBuilder, private pageService: PageService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateAbsence: ['', Validators.required],
      motif: ['', Validators.required],
      document: ['']
  });
  }

  // convenience getter for easy access to form fields
  //get f() { return this.form.controls; }

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
