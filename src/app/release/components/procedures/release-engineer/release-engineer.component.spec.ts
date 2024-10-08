import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseEngineerComponent } from './release-engineer.component';

describe('ReleaseEngineerComponent', () => {
  let component: ReleaseEngineerComponent;
  let fixture: ComponentFixture<ReleaseEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseEngineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
