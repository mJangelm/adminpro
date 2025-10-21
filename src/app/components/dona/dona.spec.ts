import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dona } from './dona';

describe('Dona', () => {
  let component: Dona;
  let fixture: ComponentFixture<Dona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dona]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dona);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
