import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [...sharedComponents],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ...sharedComponents,
        CommonModule,
        FormsModule

    ],
    providers: [],
})
export class AppSharedModule { }