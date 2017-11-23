import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
// import { Router } from '@angular/router';

@Injectable()
export class HeroService {

    getHeroes() {
        return Promise.resolve(HEROES);
    }

/*    setRouter(router: Router) {
    router.events.subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        console.log(event);
      });
   } */
}

