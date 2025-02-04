import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatDivider
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
