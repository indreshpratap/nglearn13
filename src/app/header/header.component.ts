import { Component } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {

    menu: Array<any>;

    constructor() {
        this.menu = [
            { label: 'Home', link: "/" },
            { label: 'About', link: "/about" },
            {
                label: 'Examples', children: [
                    { label: "Interpolation", link: "/interpolation" },
                    { label: "Property Binding", link: "/property-binding" },
                    { label: "event", link: "/event" },
                    { label: "condition", link: "/condition" },
                    { label: "loop", link: "/loop" },
                    { label: "css-classes", link: "/css-classes" },
                    { label: "input-output", link: "/input-output" },
                    { label: "Observables", link: "/observables" },
                ]
            },
            
            {label:"Admin", children:[
                { label: "Products", link: "/admin/products" },
                { label: "Category Manager", link: "/admin/category-manager" },
                { label: "New Product", link: "/admin/new-product" },
                { label: "Edit Product 1", link: "/admin/new-product/edit/1", queryParams:{demo:"one"} },
                { label: "Edit Product 2", link: "/admin/new-product/edit/2",queryParams:{demo:"two"} },

            ]
        }
        ]
    }
}