import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNumberComponent } from './part-number.component';

describe('PartNumberComponent', () => {
  let component: PartNumberComponent;
  let fixture: ComponentFixture<PartNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
