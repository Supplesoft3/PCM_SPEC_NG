import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareReleaseAnalystComponent } from './software-release-analyst.component';

describe('SoftwareReleaseAnalystComponent', () => {
  let component: SoftwareReleaseAnalystComponent;
  let fixture: ComponentFixture<SoftwareReleaseAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareReleaseAnalystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareReleaseAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
