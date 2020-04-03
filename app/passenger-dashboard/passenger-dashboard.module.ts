import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //for using in browser
import { CommonModule } from '@angular/common'; //for the directives we will use
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
//services
import { PassengerDashboardServices } from './passenger-dashboard.service';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

const routes: Routes = [{
  path: 'passengers', 
  // component: PassengerDashboardComponent // goes to this component on /passengers
  children: [ //creates new tree after /passengers/
    {path:'', component: PassengerDashboardComponent}, // renders main component on /passengers/
    {path:':id', component: PassengerViewerComponent}  // renders ather components on /passengers/someId
  ]
}]

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
    HttpModule,
    RouterModule.forChild(routes) //because this is a featured/child module
  ],
  // exports: [
  //   PassengerDashboardComponent,
  //   PassengerViewerComponent
  // ],
  // don't need to exports because we are using routes module

  providers: [PassengerDashboardServices] //services
})

export class PassengerDashboardModule {}