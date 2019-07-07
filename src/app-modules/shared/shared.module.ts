import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { sharedComponents } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';

@NgModule({
    declarations: [...sharedComponents],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientModule,
        ...PRIMENG
    ],
    exports: [
        ...sharedComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientModule,
        ...PRIMENG 

    ],
    providers: [],
})
export class AppSharedModule { }