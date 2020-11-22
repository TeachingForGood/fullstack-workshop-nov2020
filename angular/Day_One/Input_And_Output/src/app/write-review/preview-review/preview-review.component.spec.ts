import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewReviewComponent } from './preview-review.component';

describe('PreviewReviewComponent', () => {
  let component: PreviewReviewComponent;
  let fixture: ComponentFixture<PreviewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
