import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPfeComponent } from './card-pfe.component';

describe('CardPfeComponent', () => {
  let component: CardPfeComponent;
  let fixture: ComponentFixture<CardPfeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPfeComponent]
    });
    fixture = TestBed.createComponent(CardPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
