import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterAbsenceComponent } from './page-ajouter-absence.component';

describe('PageAjouterAbsenceComponent', () => {
  let component: PageAjouterAbsenceComponent;
  let fixture: ComponentFixture<PageAjouterAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterAbsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
