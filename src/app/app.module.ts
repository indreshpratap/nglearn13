import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InterpolationComponent } from './examples/interpolation.component';
import { PropertyBindingComponent } from './examples/property-binding.component';
import { EventsComponent } from './examples/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventsComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
