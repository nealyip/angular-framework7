import {Component, OnInit} from "@angular/core";

@Component({
    template: `hello <span class="home-text">Home</span>`,
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit{

    ngOnInit(): void {
        console.log('home');
    }

}