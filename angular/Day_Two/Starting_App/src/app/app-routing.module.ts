import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'review', loadChildren: () => import('./features/review/review.module').then(m => m.ReviewModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
