///node_modules/angular2/typings/browser.d.ts

import {Component, provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import 'rxjs/Rx'; // load the full rxjs

@Component({
    selector: 'main-app',
    template: `<h1>Demo of Angular 2 using ASP.NET Core with Visual Studio 2015</h1>`
})


class MainApp {
    constructor() { }
}

bootstrap(MainApp, [])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
