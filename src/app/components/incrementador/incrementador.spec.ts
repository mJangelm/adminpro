import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incrementador } from './incrementador';

describe('Incrementador', () => {
  let component: Incrementador;
  let fixture: ComponentFixture<Incrementador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Incrementador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Incrementador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
