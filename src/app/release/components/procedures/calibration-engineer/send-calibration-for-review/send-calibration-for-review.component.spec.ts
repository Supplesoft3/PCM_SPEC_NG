import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCalibrationForReviewComponent } from './send-calibration-for-review.component';

describe('SendCalibrationForReviewComponent', () => {
  let component: SendCalibrationForReviewComponent;
  let fixture: ComponentFixture<SendCalibrationForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendCalibrationForReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendCalibrationForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
