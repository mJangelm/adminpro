import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica1 } from './grafica1';

describe('Grafica1', () => {
  let component: Grafica1;
  let fixture: ComponentFixture<Grafica1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Grafica1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
