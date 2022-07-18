import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrenciesRateComponent } from './display-currencies-rate.component';

describe('DisplayCurrenciesRateComponent', () => {
  let component: DisplayCurrenciesRateComponent;
  let fixture: ComponentFixture<DisplayCurrenciesRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCurrenciesRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCurrenciesRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
