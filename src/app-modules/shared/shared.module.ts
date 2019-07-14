import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';
import { pipes } from './pipes';

@NgModule({
    declarations: [...sharedComponents,...pipes],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientModule,
        ...PRIMENG
    ],
    exports: [
        ...sharedComponents,
        ...pipes,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // HttpClientModule,
        ...PRIMENG 

    ],
    providers: [],
})
export class AppSharedModule { }