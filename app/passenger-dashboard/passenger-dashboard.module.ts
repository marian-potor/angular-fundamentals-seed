import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //for using in browser
import { CommonModule } from '@angular/common'; //for the directives we will use
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
//services
import { PassengerDashboardServices } from './passenger-dashboard.service';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  providers: [PassengerDashboardServices] //services
})

export class PassengerDashboardModule {}