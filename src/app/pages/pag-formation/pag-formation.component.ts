import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData, UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-pag-formation',
  templateUrl: './pag-formation.component.html',
  styleUrls: ['./pag-formation.component.scss']
})
export class PagFormationComponent implements OnInit {

  
  filterValue : string;
  dataSource : UserData;
  pageEvent : PageEvent;
  displayedColumns : string[] = ['id', 'name', 'username', 'email'];

  constructor(
    private utilisateurService : UtilisateurService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    // this.utilisateurService.findAll(1, 4).pipe(
    //   map((userData: UserData) => this.dataSource = userData)
    // ).subscribe();
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;


    // if(this.filterValue == null) {
    //   page = page +1;
    //   this.utilisateurService.findAll(page, size).pipe(
    //     map((userData: UserData) => this.dataSource = userData)
    //   ).subscribe();
    // } else {
    //   this.utilisateurService.paginateByName(page, size, this.filterValue).pipe(
    //     map((userData: UserData) => this.dataSource = userData)
    //   ).subscribe()
    // }

  }

  findByName(username: string) {
    console.log(username);
    // this.utilisateurService.paginateByName(0, 4, username).pipe(
    //   map((userData: UserData) => this.dataSource = userData)
    // ).subscribe()
  }

  navigateToProfile(id:number) {
    this.router.navigate(['./' + id], {relativeTo: this.activatedRoute});
  }

}
