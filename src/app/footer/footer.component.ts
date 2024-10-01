import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponentFolio {
  linkedIn:string = "https://www.linkedin.com/in/omayma-akoulih-508106216/"
  instagram:string="https://www.instagram.com/omaymaako/";
  gitHub:string = "https://github.com/omaimaakoulih";
  medium:string = "https://medium.com/@akoulihomayma";


}
