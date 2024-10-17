import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseSidebarComponent } from './release-sidebar.component';

describe('ReleaseSidebarComponent', () => {
  let component: ReleaseSidebarComponent;
  let fixture: ComponentFixture<ReleaseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
