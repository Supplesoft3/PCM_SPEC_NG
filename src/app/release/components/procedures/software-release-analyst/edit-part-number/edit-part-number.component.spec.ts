import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartNumberComponent } from './edit-part-number.component';

describe('EditPartNumberComponent', () => {
  let component: EditPartNumberComponent;
  let fixture: ComponentFixture<EditPartNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPartNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPartNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
