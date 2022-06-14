import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModifierProfilComponent } from './page-modifier-profil.component';

describe('PageModifierProfilComponent', () => {
  let component: PageModifierProfilComponent;
  let fixture: ComponentFixture<PageModifierProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModifierProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModifierProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
