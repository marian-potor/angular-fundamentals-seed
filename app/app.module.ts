import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //for the directives we will use
import { AppComponent } from './app.component'; //the component
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent      //list of components
  ],
  imports: [
    //angular modules
    CommonModule,
    //custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
