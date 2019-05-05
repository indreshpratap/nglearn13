import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmNewProductComponent } from './adm-new-product.component';

const routes: Routes = [
    { path: "", component: AdmNewProductComponent },
    { path: "edit/:id", component: AdmNewProductComponent },
];
@NgModule({
    declarations: [AdmNewProductComponent],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class NewProductModule {

}