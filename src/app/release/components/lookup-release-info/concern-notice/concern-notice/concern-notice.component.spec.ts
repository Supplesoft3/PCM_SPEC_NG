import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernNoticeComponent } from './concern-notice.component';

describe('ConcernNoticeComponent', () => {
  let component: ConcernNoticeComponent;
  let fixture: ComponentFixture<ConcernNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcernNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcernNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
