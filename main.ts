import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //code needed to compile our app in the browser

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
