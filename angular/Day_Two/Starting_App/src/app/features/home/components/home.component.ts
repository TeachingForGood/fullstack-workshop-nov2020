import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/shared/models/review.model';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  filterInput = new FormControl('');
  $subscription: Subscription = new Subscription();
  reviews: Review[] = [];
  filteredReviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.inputChangeHandler();
    this.getReviews();
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  inputChangeHandler(): void {
    this.$subscription.add(this.filterInput.valueChanges.subscribe(
      (input) => {
        this.filteredReviews = this.reviews.filter(
          (review) => review.title.toLowerCase().includes(input.toLowerCase())
        );
      }
    ));
  }

  getReviews(): void {
    this.$subscription.add(this.reviewService.getReviews().subscribe(
      (res) => {
        this.reviews = res;
      }
    ));
  }

}
