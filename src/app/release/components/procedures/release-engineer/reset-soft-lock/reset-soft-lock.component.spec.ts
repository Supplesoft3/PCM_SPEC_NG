import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSoftLockComponent } from './reset-soft-lock.component';

describe('ResetSoftLockComponent', () => {
  let component: ResetSoftLockComponent;
  let fixture: ComponentFixture<ResetSoftLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetSoftLockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetSoftLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
