import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordIvsCalibrationDownloadComponent } from './ford-ivs-calibration-download.component';

describe('FordIvsCalibrationDownloadComponent', () => {
  let component: FordIvsCalibrationDownloadComponent;
  let fixture: ComponentFixture<FordIvsCalibrationDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FordIvsCalibrationDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordIvsCalibrationDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
