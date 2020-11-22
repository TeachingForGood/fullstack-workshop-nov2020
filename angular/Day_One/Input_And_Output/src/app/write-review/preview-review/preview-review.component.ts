import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/review.model';

@Component({
  selector: 'app-preview-review',
  templateUrl: './preview-review.component.html',
  styleUrls: ['./preview-review.component.scss']
})
export class PreviewReviewComponent implements OnInit {
  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
