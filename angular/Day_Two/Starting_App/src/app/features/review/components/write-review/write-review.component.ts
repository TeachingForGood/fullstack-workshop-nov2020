import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
  reviewData: Review;
  pageTitle = 'Write a Review';
  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialize form group.
   */
  initForm() {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: [null, [Validators.required]],
      comments: ['', Validators.required]
    });
  }

  /**
   * Handle updates to the rating from child component.
   * @param newRating - numerical rating coming as OutPut
   */
  handleRatingChange(newRating: number) {
    this.reviewForm.controls.rating.setValue(newRating);
  }

  /**
   * Submit the form and save the review to the database.
   */
  createReview() { }

}
