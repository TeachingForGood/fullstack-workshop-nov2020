export class Review {
  title: string;
  rating: number;
  comments: string;

  constructor(apiData: ApiReview) {
    this.title = apiData.RVW_TTL;
    this.rating = apiData.RVW_RTNG;
    this.comments = apiData.RVW_CMNTS;
  }
}

export class ApiReview {
  id: string;
  RVW_TTL: string;
  RVW_RTNG: number;
  RVW_CMNTS: string;
}

export class ApiGetReviewsResponse {
  reviews: ApiReview[];
}
