import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  readonly url = `/api/v1`;

  constructor(private http: HttpClient) { }

  createReview(review: Review): Observable<any> {
    return this.http.post(`${this.url}/review`, review);
  }

  getReviews() {
    return this.http.get(`${this.url}/review`);
  }
}
