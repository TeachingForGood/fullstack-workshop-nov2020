import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/review.model';

@Component({
  selector: 'app-write-review-form',
  templateUrl: './write-review-form.component.html',
  styleUrls: ['./write-review-form.component.scss']
})
export class WriteReviewFormComponent implements OnInit, OnDestroy {
  @Output() dataUpdate = new EventEmitter<Review>();
  reviewForm!: FormGroup;
  $subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.initForm();
    this.subscribeToReviewFormChanges();
  }

  initForm() {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      rating: ['', [Validators.required, Validators.pattern(/\d+/)]],
      comments: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  /**
   * Subscribe to reviewForm value changes.
   */
  subscribeToReviewFormChanges() {
    this.$subscription.add(this.reviewForm.valueChanges.subscribe(
      (formValues: Review) => {
        this.dataUpdate.emit(formValues);
      }
    ));
  }
}
