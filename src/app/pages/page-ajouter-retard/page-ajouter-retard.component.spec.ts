import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterRetardComponent } from './page-ajouter-retard.component';

describe('PageAjouterRetardComponent', () => {
  let component: PageAjouterRetardComponent;
  let fixture: ComponentFixture<PageAjouterRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterRetardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
