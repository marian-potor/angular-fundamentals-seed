import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //for using in browser
import { CommonModule } from '@angular/common'; //for the directives we will use
import { FormsModule } from '@angular/forms';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    PassengerDashboardComponent
  ]
  
})

export class PassengerDashboardModule {}