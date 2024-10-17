import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDrawingComponent } from './software-drawing.component';

describe('SoftwareDrawingComponent', () => {
  let component: SoftwareDrawingComponent;
  let fixture: ComponentFixture<SoftwareDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDrawingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
