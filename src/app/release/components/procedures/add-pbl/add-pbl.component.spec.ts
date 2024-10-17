import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPblComponent } from './add-pbl.component';

describe('AddPblComponent', () => {
  let component: AddPblComponent;
  let fixture: ComponentFixture<AddPblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPblComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
