/// <reference path="../typings/tsd.d.ts" />


import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from '@angular/router-deprecated';



import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';


@Component({
    selector: 'hpm-app',
    template: `<div>
                <h1>{{pageTitle}}</h1>
                <hpm-products></hpm-products>
              </div>
                `,
    directives: [ProductListComponent, ROUTER_DIRECTIVES],
    providers: [ProductService,  HTTP_PROVIDERS]
})



export class AppComponent {
    pageTitle: string = 'Home Product Management';
}
