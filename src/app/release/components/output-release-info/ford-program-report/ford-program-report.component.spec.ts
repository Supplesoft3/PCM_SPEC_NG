import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordProgramReportComponent } from './ford-program-report.component';

describe('FordProgramReportComponent', () => {
  let component: FordProgramReportComponent;
  let fixture: ComponentFixture<FordProgramReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FordProgramReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordProgramReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
