import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG } from './primeng';
import { pipes } from './pipes';
import { RouterModule } from '@angular/router';
import { directive } from './directive';

@NgModule({
    declarations: [...sharedComponents,...pipes,...directive],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // HttpClientModule,
        ...PRIMENG
    ],
    exports: [
        ...sharedComponents,
        ...pipes,
        ...directive,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        
        // HttpClientModule,
        ...PRIMENG 

    ],
    providers: [],
})
export class AppSharedModule { }