import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

//import { appRoutingMoule } from './app.router';



@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frigo 3000';

  sidebarMenus: any[];
  router: Router;
  
  constructor(router: Router) {
    this.router = router;
    console.log("route!");

    this.sidebarMenus = [
      {title: 'Mon Frigo', icon: 'home', color: 'blue-500', link: '/pages/mon-frigo', exact: true},
      {title: 'Mes recettes', icon: 'wrench', color: 'purple-500', link: '/pages/mes-recettes', exact: false},
      {title: 'Planification', icon: 'newspaper-o', color: 'red-500', link: '/pages/planification', exact: false},
      {title: 'Ma liste de course', icon: 'info-circle', color: 'indigo-500', link: '/pages/ma-liste-de-course', exact: false}
    ];

    console.log("menu!");
  
  }
}

