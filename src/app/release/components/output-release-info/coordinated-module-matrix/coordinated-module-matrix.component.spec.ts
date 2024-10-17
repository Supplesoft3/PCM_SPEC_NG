import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatedModuleMatrixComponent } from './coordinated-module-matrix.component';

describe('CoordinatedModuleMatrixComponent', () => {
  let component: CoordinatedModuleMatrixComponent;
  let fixture: ComponentFixture<CoordinatedModuleMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatedModuleMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatedModuleMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
