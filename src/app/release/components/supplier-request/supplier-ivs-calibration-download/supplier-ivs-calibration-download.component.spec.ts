import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierIvsCalibrationDownloadComponent } from './supplier-ivs-calibration-download.component';

describe('SupplierIvsCalibrationDownloadComponent', () => {
  let component: SupplierIvsCalibrationDownloadComponent;
  let fixture: ComponentFixture<SupplierIvsCalibrationDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierIvsCalibrationDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierIvsCalibrationDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
