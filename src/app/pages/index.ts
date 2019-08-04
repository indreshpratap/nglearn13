import { HomePageComponent } from './home.component';
import { AboutPageComponent } from './about.component';
import { ContactPageComponent } from './contact.component';
import { NotFoundPageComponent } from './not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';

export const PAGE_COMPONENT = [
    AboutPageComponent,
    HomePageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    LoginComponent
];

export * from './about.component';
export * from './contact.component';
export * from './home.component';
export * from './not-found.component';
export * from './product-details/product-details.component';
export * from './login/login.component';