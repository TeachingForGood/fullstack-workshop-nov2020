import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

const routes: Routes = [
  { path: '', component: WriteReviewComponent }
];

@NgModule({
  declarations: [
    WriteReviewComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewModule { }
