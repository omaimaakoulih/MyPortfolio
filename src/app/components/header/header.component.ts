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
    links = [{name:'Home', url:'#home'},
        {name:'About', url:'#about'},
        {name : 'Projects', url: '#projects'},
        {name : 'Contact', url : '#contact'}];
    
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}