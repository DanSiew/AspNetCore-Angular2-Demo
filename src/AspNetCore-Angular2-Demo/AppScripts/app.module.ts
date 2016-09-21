import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductService } from './products/product.service';
import { StarComponent } from './shared/star.component'
import {WelcomeComponent } from './home/welcome.component'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';


import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        WelcomeComponent,
        ProductFilterPipe,
        StarComponent
    ],
    providers: [
        ProductService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }