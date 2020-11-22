import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Output() ratingChanged = new EventEmitter<number>();
  readonly numStars = 5;
  ratingsArray = [];
  public rating?: number;

  constructor() {
    this.initRatingsArray();
  }

  ngOnInit(): void {
  }

  /**
   * Populate an array that will create numStars stars in the template.
   */
  initRatingsArray() {
    for (let i = 0; i < this.numStars; i++) {
      this.ratingsArray.push(i);
    }
  }

  /**
   * Determine whether to show a filled-in star or an outline of a star.
   */
  getIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    }
    return 'star_border';
  }

  /**
   * Set rating when user clicks on a mat-icon-button, emit ratingChanged event.
   */
  setRating(index: number) {
    this.rating = index + 1;
    this.ratingChanged.emit(this.rating);
  }
}
