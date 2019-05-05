import { AdmCategoryManagerComponent } from './adm-category-manager/adm-category-manager.component';
import { AdmProductListComponent } from './adm-product-list/adm-product-list.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminPages = [
    AdminComponent,
    AdmCategoryManagerComponent,
    AdmProductListComponent
];

export const adminRoutes: Routes = [
    // {
    //     path: "", component:AdminComponent, children: [
    { path: "category-manager", component: AdmCategoryManagerComponent },
    { path: "products", component: AdmProductListComponent },
    { path: "new-product", loadChildren: "./adm-new-product/new-product.module#NewProductModule" }
    //     ]
    // }
];