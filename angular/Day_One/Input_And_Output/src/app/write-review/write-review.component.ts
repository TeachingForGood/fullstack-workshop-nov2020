import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from '../review.model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
  reviewData: Review;
  pageTitle = 'Write a Review';
  $subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void { }

  /**
   * Handle a dataUpdate event from the child form component.
   */
  handleReviewFormUpdate(updatedReview: Review) {
    this.reviewData = updatedReview;
  }

}
