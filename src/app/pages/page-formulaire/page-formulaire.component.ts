// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { TokenIdentificationService } from '../token-identification.service';

// @Component({
//   selector: 'app-page-formulaire',
//   templateUrl: './page-formulaire.component.html',
//   styleUrls: ['./page-formulaire.component.scss']
// })


// class CustomValidators {
//   static passwordContainsNumber(control: AbstractControl): ValidationErrors {
//     const regex= /\d/;

//     if(regex.test(control.value) && control.value !== null) {
//       return null;
//     } else {
//       return {passwordInvalid: true};
//     }
//   }

//   static passwordsMatch (control: AbstractControl): ValidationErrors {
//     const password = control.get('password').value;
//     const confirmPassword = control.get('confirmPassword').value;

//     if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
//       return null;
//     } else {
//       return {passwordsNotMatching: true};
//     }
//   }
// }



// export class PageFormulaireComponent implements OnInit {

//   registerForm: FormGroup;

//   constructor(private client: HttpClient,
//     private router : Router,
//     private formBuilder : FormBuilder,
//     private tokenIdentification : TokenIdentificationService
    
//     private authService: AuthenticationService,
   
    
//     ) { }

//   ngOnInit(): void {

//     this.registerForm = this.formBuilder.group({
//       name: [null, [Validators.required]],
//       username: [null, [Validators.required]],
//       email: [null, [
//         Validators.required,
//         Validators.email,
//         Validators.minLength(6)
//       ]],
//       password: [null, [
//         Validators.required,
//         Validators.minLength(3),
//         CustomValidators.passwordContainsNumber
//       ]],
//       confirmPassword: [null, [Validators.required]]
//     },{
//        validators: CustomValidators.passwordsMatch
//     })

    
//   }


//   onSubmit(){
//     if(this.registerForm.invalid) {
//       return;
//     }
//     console.log(this.registerForm.value);
//     this.authService.register(this.registerForm.value).pipe(
//       map(user => this.router.navigate(['login']))
//     ).subscribe()
//   }


// }
