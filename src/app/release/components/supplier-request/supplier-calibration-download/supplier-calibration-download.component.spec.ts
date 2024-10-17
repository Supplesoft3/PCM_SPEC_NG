import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCalibrationDownloadComponent } from './supplier-calibration-download.component';

describe('SupplierCalibrationDownloadComponent', () => {
  let component: SupplierCalibrationDownloadComponent;
  let fixture: ComponentFixture<SupplierCalibrationDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierCalibrationDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierCalibrationDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
