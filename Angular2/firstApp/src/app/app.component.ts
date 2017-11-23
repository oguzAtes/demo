import { Component } from '@angular/core';
import { HeroService } from './heroes/shared/hero.service';
import { RouterService } from './package/router/shared/router.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, RouterService]
})


export class AppComponent {
   constructor(routerService: RouterService) {
    // routerService.setRouter(router);
/*     router.events.subscribe((event) => {
      // example: NavigationStart, RoutesRecognized, NavigationEnd
      console.log(event);
    }); */
   }
}


