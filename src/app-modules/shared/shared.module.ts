import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';

@NgModule({
    declarations: [...sharedComponents],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG
    ],
    exports: [
        ...sharedComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG 

    ],
    providers: [],
})
export class AppSharedModule { }