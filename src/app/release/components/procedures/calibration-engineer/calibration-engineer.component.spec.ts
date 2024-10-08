import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationEngineerComponent } from './calibration-engineer.component';

describe('CalibrationEngineerComponent', () => {
  let component: CalibrationEngineerComponent;
  let fixture: ComponentFixture<CalibrationEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalibrationEngineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrationEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
