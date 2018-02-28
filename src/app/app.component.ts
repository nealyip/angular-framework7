import {Component, OnInit} from '@angular/core';
import {Framework7App} from './services/framework7';
/// <reference path="./framework7.d.ts" />
// import Framework7 from 'framework7';
// import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
// declare var Framework7: any;

// const x = new Framework7();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(protected _app: Framework7App) {

    }

    ngOnInit(): void {
        const app = new Framework7({
            // App root element
            root: '#app',
            // App Name
            name: 'My App',
            // App id
            id: 'com.myapp.test',
            // Enable swipe panel
            panel: {
                swipe: 'left',
            },
            // Add default routes
            routes: [
                // {
                //     path: '/about/',
                //     url: 'about.html',
                // },
            ],
            // ... other parameters
        });
        //
        this._app.instance = app;

        const mainView = app.views.create('.view-main');
        app.init();
    }
}
