import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    templateUrl: "app.component.html"
})
export class AppComponent {
    title: string;
    numberOne: number = 1;
    numberTwo: number = 2;
    isHappy: boolean = true;
    name:string = 'Ali';

    constructor(){
        this.title = "Ultimate Angular";

    }

    handleClick() {
        this.name = "Alan";
    }

    handleBlur() {
        this.name = "Alan after blur";
    }

    handleFocus(){
        this.name = "Alan after focus";
    }
}
