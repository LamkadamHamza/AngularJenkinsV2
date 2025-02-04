import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdminTemplateComponent} from "./admin-template/admin-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-material';
}
