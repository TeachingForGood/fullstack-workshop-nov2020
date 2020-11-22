import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
  routes = [
    {
      url: '/review',
      text: 'Write Review',
      icon: 'edit'
    }
  ];
}
