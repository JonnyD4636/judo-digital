import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AthleteSectionComponent } from './athlete-section.component';

describe('AthleteSectionComponent', () => {
  let component: AthleteSectionComponent;
  let fixture: ComponentFixture<AthleteSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AthleteSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
