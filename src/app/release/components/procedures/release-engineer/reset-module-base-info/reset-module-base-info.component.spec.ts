import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetModuleBaseInfoComponent } from './reset-module-base-info.component';

describe('ResetModuleBaseInfoComponent', () => {
  let component: ResetModuleBaseInfoComponent;
  let fixture: ComponentFixture<ResetModuleBaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetModuleBaseInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetModuleBaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
