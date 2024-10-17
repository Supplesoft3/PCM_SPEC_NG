import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSblComponent } from './add-sbl.component';

describe('AddSblComponent', () => {
  let component: AddSblComponent;
  let fixture: ComponentFixture<AddSblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSblComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
