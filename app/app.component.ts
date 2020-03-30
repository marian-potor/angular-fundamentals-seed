import { Component } from '@angular/core';

@Component({ //declares this class as a angular component
  selector: 'app-root', //include this component in html <app-root></app-root>
  styleUrls: ['app.component.scss'],  //style sheets
  template: `<passenger-dashboard></passenger-dashboard>`
})
export class AppComponent {}
