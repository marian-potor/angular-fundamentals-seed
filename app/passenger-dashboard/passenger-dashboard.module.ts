import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //for using in browser
import { CommonModule } from '@angular/common'; //for the directives we will use
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
//services
import { PassengerDashboardServices } from './passenger-dashboard.service';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [PassengerDashboardServices] //services
})

export class PassengerDashboardModule {}