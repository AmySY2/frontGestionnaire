import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFormationComponent } from './pag-formation.component';

describe('PagFormationComponent', () => {
  let component: PagFormationComponent;
  let fixture: ComponentFixture<PagFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
