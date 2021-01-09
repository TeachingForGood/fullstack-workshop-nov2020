import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'learning-angular';
  routes = [
    {
      url: '/review',
      text: 'Write Review',
      icon: 'edit'
    }
  ];
  $subscription = new Subscription();
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.$subscription.add(this.authService.authStatusChanges().subscribe(
      (authenticated) => this.isAuthenticated = authenticated
    ));
    this.authService.autoAuthUser();
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
