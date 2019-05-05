import { AdmCategoryManagerComponent } from './adm-category-manager/adm-category-manager.component';
import { AdmProductListComponent } from './adm-product-list/adm-product-list.component';
import { AdmNewProductComponent } from './adm-new-product/adm-new-product.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminPages = [
    AdminComponent,
    AdmCategoryManagerComponent,
    AdmProductListComponent,
    AdmNewProductComponent
];

export const adminRoutes: Routes = [
    {
        path: "admin", component:AdminComponent, children: [
            { path: "category-manager", component: AdmCategoryManagerComponent },
            { path: "products", component: AdmProductListComponent },
            { path: "new-product", component: AdmNewProductComponent }
        ]
    }
];