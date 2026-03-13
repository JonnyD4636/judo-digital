import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RefereeSectionComponent } from './referee-section.component';

describe('RefereeSectionComponent', () => {
  let component: RefereeSectionComponent;
  let fixture: ComponentFixture<RefereeSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RefereeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RefereeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
