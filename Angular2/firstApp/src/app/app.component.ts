import { Component } from '@angular/core';
import { HeroService } from './heroes/shared/hero.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<app-heroes></app-heroes>',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'app';
}
