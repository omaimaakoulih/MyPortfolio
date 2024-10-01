import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private viewPortScroller:ViewportScroller){}

  onProjectsClick(){
    this.viewPortScroller.scrollToAnchor('projects');
  }

}
