import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private subject: any;


    constructor(private _productService: ProductService,
        private route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {
        this.subject = this.route
            .params
            .subscribe(params => {
                let id = +params['id'];
                this.getProduct(id);
            });
    }

    ngOnDestroy() {
        if (this.subject) {
            this.subject.unsubscribe();
        }
    }


    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
