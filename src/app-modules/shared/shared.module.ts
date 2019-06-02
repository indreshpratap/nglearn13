import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [...sharedComponents],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...sharedComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule 

    ],
    providers: [],
})
export class AppSharedModule { }