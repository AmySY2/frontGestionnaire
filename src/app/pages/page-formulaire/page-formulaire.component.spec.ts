import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormulaireComponent } from './page-formulaire.component';

describe('PageFormulaireComponent', () => {
  let component: PageFormulaireComponent;
  let fixture: ComponentFixture<PageFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
