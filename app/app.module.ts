import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //for the directives we will use
import { AppComponent } from './app.component'; //the component
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  // {path: '', redirectTo: 'passengers', pathMatch: 'full'}, - redirects path '/' to '/passengers' angular does all the job
  {path: '**', component: NotFoundComponent}
]; //this array contains the routes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent   //list of components
  ],
  imports: [
    //angular modules
    CommonModule,
    RouterModule.forRoot(routes),
    //custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
