import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgramToReleasedPartComponent } from './add-program-to-released-part.component';

describe('AddProgramToReleasedPartComponent', () => {
  let component: AddProgramToReleasedPartComponent;
  let fixture: ComponentFixture<AddProgramToReleasedPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProgramToReleasedPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProgramToReleasedPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
