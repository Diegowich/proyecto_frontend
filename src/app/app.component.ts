import { Component } from '@angular/core';
import { routes } from './app.routes'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,RouterLink, ListUsersComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-140%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular';
  routes = routes;
}
