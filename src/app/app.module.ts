import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {Framework7App} from "./services/framework7";


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [
        Framework7App
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
