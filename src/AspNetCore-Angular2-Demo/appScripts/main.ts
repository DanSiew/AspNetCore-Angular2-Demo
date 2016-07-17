/// <reference path="../typings/tsd.d.ts" />

import 'rxjs/Rx';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {provide} from '@angular/core';
import { appRouterProviders } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provide(APP_BASE_HREF, { useValue: '/' })
]); 