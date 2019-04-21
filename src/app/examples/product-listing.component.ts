import { Component } from '@angular/core';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html'

})
export class ProductListingComponent {

    productList = [
        {
            id:3986899274,
            name:'Stella Blake',
            price:22138,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum repudiandae fuga consequatur ',
            inCart: false
        },
        {
            id:4018267992,
            name:'Charlie Rios',
            price:50544,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:39392341,
            name:'Mina Franklin',
            price:42911,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:902681578,
            name:'Todd Schmidt',
            price:220,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:3448630879,
            name:'Franklin Lowe',
            price:45644,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:957867200,
            name:'Earl Kelley',
            price:14549,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:1445443246,
            name:'Virginia Wilkins',
            price:28485,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:3830500670,
            name:'Helen Murphy',
            price:25251,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
        {
            id:887531758,
            name:'Nicholas Rivera',
            price:38370,
            description:'libero laborum cupiditate beatae quasi perferendis, voluptatibus obcaecati atque. Quia, ius',inCart: false
        },
       
    ]

    
    //here event = a product item which is coming from child component
    pushToCart(event) {
console.log("calling push to cart at parent",event);
event.inCart = true;


    }

    removeFromCart(event){
console.log("Calling  remove from cart at parent",event);
        event.inCart = false;
    }

}