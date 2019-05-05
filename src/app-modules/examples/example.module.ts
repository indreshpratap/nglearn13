import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EXAMPLE_COMPONENTS, exampleRoutes } from './pages';

@NgModule({
    declarations: [...EXAMPLE_COMPONENTS],
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes)
    ],
    exports: [],
    providers: [],
})
export class ExampleModule { }