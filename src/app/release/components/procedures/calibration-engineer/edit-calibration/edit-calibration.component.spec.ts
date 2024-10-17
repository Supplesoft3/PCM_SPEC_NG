import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalibrationComponent } from './edit-calibration.component';

describe('EditCalibrationComponent', () => {
  let component: EditCalibrationComponent;
  let fixture: ComponentFixture<EditCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCalibrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
