import { InterpolationComponent } from './interpolation.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventsComponent } from './events.component';
import { ConditionComponent } from './condition.component';
import { LoopComponent } from './loop.component';
import { Example } from './example-comp';
import { CssClassesComponent } from './css-classes.component';
import { ProductListingComponent } from './product-listing.component';
import { ProductItemComponent } from './product-item.component';
import { Routes } from '@angular/router';
import { ObservablesComponent } from './observables.component';

export const EXAMPLE_COMPONENTS = [
    InterpolationComponent,
    PropertyBindingComponent,
    EventsComponent,
    ConditionComponent,
    LoopComponent,
    Example,
    CssClassesComponent,
    ProductListingComponent,
    ProductItemComponent,
    ObservablesComponent
];


export const exampleRoutes: Routes = [
    { path: "interpolation", component: InterpolationComponent },
    { path: "property-binding", component: PropertyBindingComponent },
    { path: "event", component: EventsComponent },
    { path: "condition", component: ConditionComponent },
    { path: "loop", component: LoopComponent },
    { path: "css-classes", component: CssClassesComponent },
    { path: "input-output", component: ProductListingComponent },
    { path: "observables", component: ObservablesComponent },

];
