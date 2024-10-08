import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModuleBaseInfoComponent } from './edit-module-base-info.component';

describe('EditModuleBaseInfoComponent', () => {
  let component: EditModuleBaseInfoComponent;
  let fixture: ComponentFixture<EditModuleBaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModuleBaseInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModuleBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
