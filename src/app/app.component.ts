import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Header } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '@coreui/angular';
import { FooterComponentFolio } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, RouterModule, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent, FooterComponentFolio],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'akoulihomayma';
}
