import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WersPowerSelectTableComponent } from './wers-power-select-table.component';

describe('WersPowerSelectTableComponent', () => {
  let component: WersPowerSelectTableComponent;
  let fixture: ComponentFixture<WersPowerSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WersPowerSelectTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WersPowerSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
