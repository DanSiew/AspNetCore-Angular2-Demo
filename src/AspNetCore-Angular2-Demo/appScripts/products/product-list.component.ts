
import { Component, OnInit }  from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    selector: 'hpm-products',
    templateUrl: 'contents/products/product-list.html',
    styleUrls: ['contents/products/product-list.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    products: IProduct[] = [];


        constructor(private _productService: ProductService) {
    
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
}