import { Component } from '@angular/core';
import { CardModule, CardComponent, CardGroupComponent,RowComponent, ColComponent } from '@coreui/angular';
import { Projects } from '../mock/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, CardModule, CardGroupComponent, RowComponent, ColComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  cards = [1,2,3,4,5];
  projects = Projects;

}
