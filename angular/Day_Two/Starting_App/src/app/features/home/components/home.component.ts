import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  filterInput = new FormControl('');
  $subscription: Subscription = new Subscription();

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
        console.log(input);
      }
    ));
  }

  getReviews(): void {
    this.$subscription.add(this.reviewService.getReviews().subscribe(
      (res) => {
        console.log(res);
      }
    ));
  }

}
