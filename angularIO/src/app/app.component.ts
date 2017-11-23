import { Component, OnInit } from '@angular/core';
import { RouterService } from '../package/router/routing.service';
import { DataProviderService } from '../package/data/data-provider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RouterService, DataProviderService]
})
export class AppComponent {
  constructor(private routerService: RouterService,
    private dataProviderService: DataProviderService) {}

  getList(): void {
    this.dataProviderService.getAll().then()
    .catch()
  }

}
