import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Review } from 'src/app/shared/models/review.model';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {
  reviewData: Review;
  pageTitle = 'Write a Review';
  reviewForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private router: Router
  ) {}

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
  createReview() {
    if (this.reviewForm.valid) {
      // form is valid, call service to create review
      const review: Review = { ...this.reviewForm.value };
      this.reviewService.createReview(review).subscribe(
        (res) => {
          // redirect the user back to the home page after a successful save
          this.router.navigate(['/']);
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      // form is invalid, mark all as touched
      this.reviewForm.markAllAsTouched();
    }
  }
}
