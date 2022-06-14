import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBilanClasseComponent } from './page-bilan-classe.component';

describe('PageBilanClasseComponent', () => {
  let component: PageBilanClasseComponent;
  let fixture: ComponentFixture<PageBilanClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBilanClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBilanClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
