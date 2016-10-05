import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeightingComponent } from './weighting/weighting.component';
import { MDLUpgradeElementDirective } from './shared/mdlupgrade-element.directive';

import { WeightWatchersComponent } from './weighting/weight-watchers/weight-watchers.component';
import { CheckInComponent } from './weighting/check-in/check-in.component';
import { CheckOutComponent } from './weighting/check-out/check-out.component';
import { CheckInListComponent } from './weighting/check-in-list/check-in-list.component';

// service
import {WeightingService}  from './weighting/weighting.service';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    WeightingComponent, 
    MDLUpgradeElementDirective, 
    WeightWatchersComponent, CheckInComponent, CheckOutComponent, CheckInListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // MaterializeModule,
    routing
  ],
  providers: [
    WeightingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
