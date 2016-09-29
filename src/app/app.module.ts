import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

// Materialize
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeightingComponent } from './weighting/weighting.component';
import { MDLUpgradeElementDirective } from './shared/mdlupgrade-element.directive';
import { WeightingInComponent } from './weighting/weighting-in/weighting-in.component';
import { WeightingOutComponent } from './weighting/weighting-out/weighting-out.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, HomeComponent, WeightingComponent, MDLUpgradeElementDirective, WeightingInComponent, WeightingOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // MaterializeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
