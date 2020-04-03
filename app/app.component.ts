import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({ //declares this class as a angular component
  selector: 'app-root', //include this component in html <app-root></app-root>
  styleUrls: ['app.component.scss'],  //style sheets
  template: 
  // `
  //   <nav>
  //     <a 
  //       routerLink="/"
  //       routerLinkActive="active"
  //       [routerLinkActiveOptions]="{exact: true}">
  //       Home
  //     </a>
  //     <a 
  //       routerLink="/ooops"
  //       routerLinkActive="active">
  //       Error page
  //     </a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `

  // or

    `
    <nav>
      <a *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: item.exact}">
        {{item.name}}
      </a>
    </nav>
    <router-outlet></router-outlet>
  `
  // routerLinkActive ads class active when link is active
  // routerLinkActiveOptions exact: true - in order for the link to be active 
  // the url must be exactly = routerLink in this case exactly "/"
  //<router-outlet> directive of router that is a placeholder for where the component will be injected
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: true
    },
    {
      link: "/ooops",
      name: "404",
      exact: false
    }
  ]
}
