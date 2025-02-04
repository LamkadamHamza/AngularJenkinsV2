import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-load-students',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider
  ],
  templateUrl: './load-students.component.html',
  styleUrl: './load-students.component.css'
})
export class LoadStudentsComponent {

}
