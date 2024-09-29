import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UpperCasePipe } from "@angular/common";

@Component({
    selector : 'Header',
    templateUrl : './header.component.html',
    styleUrl : './header.component.css',
    standalone : true,
    imports : [RouterOutlet, UpperCasePipe]
})
export class Header{
    name:string = 'AKOULIH Omayma';
    links = [{name:'Home', url:'./'},
        {name:'About', url:'./'},
        {name : 'Projects', url: './'},
        {name : 'Contact', url : './'}];
    
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}