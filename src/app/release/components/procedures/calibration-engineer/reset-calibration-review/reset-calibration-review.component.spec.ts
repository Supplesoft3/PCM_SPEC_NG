import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetCalibrationReviewComponent } from './reset-calibration-review.component';

describe('ResetCalibrationReviewComponent', () => {
  let component: ResetCalibrationReviewComponent;
  let fixture: ComponentFixture<ResetCalibrationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetCalibrationReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetCalibrationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
