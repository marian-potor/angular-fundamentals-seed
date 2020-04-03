import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <div>
      Page not foud <a routerLink="/">Go home</a>
    </div>
  `
})

export class NotFoundComponent {
}
