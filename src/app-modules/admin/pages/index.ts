import { AdmCategoryManagerComponent } from './adm-category-manager/adm-category-manager.component';
import { AdmProductListComponent } from './adm-product-list/adm-product-list.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminPages = [
    AdminComponent,
    AdmCategoryManagerComponent,
    AdmProductListComponent
];


export * from './adm-category-manager/adm-category-manager.component';
export * from './adm-new-product/adm-new-product.component';
export * from './adm-product-list/adm-product-list.component';
export * from './admin.component';

