import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewMainMicroTypeComponent } from './request-new-main-micro-type.component';

describe('RequestNewMainMicroTypeComponent', () => {
  let component: RequestNewMainMicroTypeComponent;
  let fixture: ComponentFixture<RequestNewMainMicroTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestNewMainMicroTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNewMainMicroTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
