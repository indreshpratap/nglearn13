import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmNewProductComponent } from './adm-new-product.component';
import { AppSharedModule } from 'src/app-modules/shared/shared.module';

const routes: Routes = [
    { path: "", component: AdmNewProductComponent },
    { path: "edit/:id", component: AdmNewProductComponent },
];
@NgModule({
    declarations: [AdmNewProductComponent],
    imports: [
        AppSharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class NewProductModule {

}