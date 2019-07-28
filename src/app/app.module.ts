import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import * as pages from './pages';
import { ExampleModule } from '../app-modules/examples/example.module';
import { ApiClient } from './providers/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from 'src/app-modules/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: pages.HomePageComponent },
      { path: 'details/:id/:name', component: pages.ProductDetailsComponent },
      { path: 'details/:id', component: pages.ProductDetailsComponent },

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
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppSharedModule,
    ExampleModule, // eager loading of feature module
    // AdminModule // eager loading of feature module

  ],
  providers:[ApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
