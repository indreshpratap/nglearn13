import { NgModule } from '@angular/core';
import { adminPages, adminRoutes } from './pages';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [...adminPages],
    imports: [
        AppSharedModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: []
})
export class AdminModule {

}