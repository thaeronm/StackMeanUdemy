import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    public title:string;
    public subtitle:string;
    public email:string;

    constructor() { 
        this.title = "Thaeron Morales",
        this.subtitle = "Analista -Programador",
        this.email = "morales.thaeron@gmail.com"
    }

    ngOnInit() {
    }

}
