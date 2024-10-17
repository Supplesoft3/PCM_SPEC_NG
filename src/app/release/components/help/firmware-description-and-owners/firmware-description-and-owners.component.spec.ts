import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareDescriptionAndOwnersComponent } from './firmware-description-and-owners.component';

describe('FirmwareDescriptionAndOwnersComponent', () => {
  let component: FirmwareDescriptionAndOwnersComponent;
  let fixture: ComponentFixture<FirmwareDescriptionAndOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmwareDescriptionAndOwnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmwareDescriptionAndOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
