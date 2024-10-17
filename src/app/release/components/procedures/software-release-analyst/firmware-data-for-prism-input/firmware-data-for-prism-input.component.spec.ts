import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareDataForPrismInputComponent } from './firmware-data-for-prism-input.component';

describe('FirmwareDataForPrismInputComponent', () => {
  let component: FirmwareDataForPrismInputComponent;
  let fixture: ComponentFixture<FirmwareDataForPrismInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmwareDataForPrismInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmwareDataForPrismInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
