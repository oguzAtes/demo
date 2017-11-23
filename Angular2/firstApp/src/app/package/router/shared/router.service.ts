import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            // example: NavigationStart, RoutesRecognized, NavigationEnd
            console.log(event);
          });
    }
}
