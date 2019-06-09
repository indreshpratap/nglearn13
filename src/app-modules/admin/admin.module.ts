import { NgModule } from '@angular/core';
import { adminPages } from './pages';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from '../shared/shared.module';
import { adminRoutes } from './admin.routes';

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