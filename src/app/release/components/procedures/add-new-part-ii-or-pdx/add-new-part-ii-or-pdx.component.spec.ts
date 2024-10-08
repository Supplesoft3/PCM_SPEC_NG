import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPartIIOrPdxComponent } from './add-new-part-ii-or-pdx.component';

describe('AddNewPartIIOrPdxComponent', () => {
  let component: AddNewPartIIOrPdxComponent;
  let fixture: ComponentFixture<AddNewPartIIOrPdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewPartIIOrPdxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPartIIOrPdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
