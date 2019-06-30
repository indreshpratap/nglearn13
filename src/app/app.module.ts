import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import * as pages from './pages';
import { ExampleModule } from '../app-modules/examples/example.module';
import { AdminModule } from 'src/app-modules/admin/admin.module';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: pages.HomePageComponent },
      {
        path: "admin", loadChildren: "../app-modules/admin/admin.module#AdminModule" //lazy loaded routes
      }
    ]
  },
  { path: 'about', component: pages.AboutPageComponent },
  { path: 'contact', component: pages.ContactPageComponent },
  { path: '**', component: pages.NotFoundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ...pages.PAGE_COMPONENT

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ExampleModule, // eager loading of feature module
    // AdminModule // eager loading of feature module

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
