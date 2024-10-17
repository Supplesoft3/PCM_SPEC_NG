import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismInputComponent } from './prism-input.component';

describe('PrismInputComponent', () => {
  let component: PrismInputComponent;
  let fixture: ComponentFixture<PrismInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrismInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrismInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
