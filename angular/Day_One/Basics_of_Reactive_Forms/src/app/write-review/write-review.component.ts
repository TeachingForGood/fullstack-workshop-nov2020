import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit, OnDestroy {

  pageTitle = 'Write a Review';
  reviewForm!: FormGroup;
  $subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscribeToReviewFormChanges();
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  /**
   * Handle logging button click.
   */
  onLogButtonClick() {
    console.log(this.reviewForm.value);
  }

  /**
   * Subscribe to reviewForm value changes.
   */
  subscribeToReviewFormChanges() {
    this.$subscription.add(this.reviewForm.valueChanges.subscribe(
      (formValues) => {
        console.log(formValues);
      }
    ));
  }

}
