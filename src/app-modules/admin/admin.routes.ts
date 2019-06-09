import { Routes } from '@angular/router';
import { AdmCategoryManagerComponent, AdmProductListComponent } from './pages';

export const adminRoutes: Routes = [
    // {
    //     path: "", component:AdminComponent, children: [
    { path: "category-manager", component: AdmCategoryManagerComponent },
    { path: "products", component: AdmProductListComponent },
    { path: "new-product", loadChildren: "./pages/adm-new-product/new-product.module#NewProductModule" }
    //     ]
    // }
];