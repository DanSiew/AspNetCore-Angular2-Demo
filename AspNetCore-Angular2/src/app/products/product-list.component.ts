
import { Component, OnInit }  from '@angular/core';
import {Router} from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'products',
    templateUrl: './product-list.html',
    styleUrls: ['./product-list.css']
})


export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[] = [];


    constructor(
        private router: Router,
        private _productService: ProductService) {
    
    }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
        ngOnInit(): void {
               this._productService.getProducts()
                         .subscribe(
                           products => this.products = products,
                           error =>  this.errorMessage = <any>error);
        }
    
        onRatingClicked(message: string): void {
            this.pageTitle = 'Product List: ' + message;
        }

        gotoDetail(product: IProduct): void {
            let link = ['/product', product.productId];
            this.router.navigate(link);
        }
}