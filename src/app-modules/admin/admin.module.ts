import { NgModule } from '@angular/core';
import { adminPages, adminRoutes } from './pages';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [...adminPages],
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: []
})
export class AdminModule {

}