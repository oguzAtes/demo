import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component'

@Injectable()
export class RouterService {
    constructor(private router: Router) {
        router.events.subscribe((event) => {
            // example: NavigationStart, RoutesRecognized, NavigationEnd
            console.log(event);
          });
    }

    createDb() {
        const Routes = [
            {path: 'main', component: AppComponent}
        ];
        return { Routes };
    }
}
