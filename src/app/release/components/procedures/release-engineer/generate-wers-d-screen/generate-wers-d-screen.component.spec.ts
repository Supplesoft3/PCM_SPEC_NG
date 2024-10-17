import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWersDScreenComponent } from './generate-wers-d-screen.component';

describe('GenerateWersDScreenComponent', () => {
  let component: GenerateWersDScreenComponent;
  let fixture: ComponentFixture<GenerateWersDScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateWersDScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateWersDScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
