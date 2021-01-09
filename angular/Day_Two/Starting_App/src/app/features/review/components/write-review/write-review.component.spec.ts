import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewService } from 'src/app/shared/services/review.service';

import { WriteReviewComponent } from './write-review.component';

describe('WriteReviewComponent', () => {
  let component: WriteReviewComponent;
  let fixture: ComponentFixture<WriteReviewComponent>;
  let reviewServiceSpy: jasmine.SpyObj<ReviewService>;

  beforeEach(async(() => {
    reviewServiceSpy = jasmine.createSpyObj('ReviewService', ['createReview']);
    TestBed.configureTestingModule({
      declarations: [ WriteReviewComponent ],
      providers: [
        { provide: ReviewService, useValue: reviewServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
