import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeClassesComponent } from './page-liste-classes.component';

describe('PageListeClassesComponent', () => {
  let component: PageListeClassesComponent;
  let fixture: ComponentFixture<PageListeClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
