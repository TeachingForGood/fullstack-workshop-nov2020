import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.scss']
})
export class DisplayReviewComponent implements OnInit {

  @Input() review!: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
