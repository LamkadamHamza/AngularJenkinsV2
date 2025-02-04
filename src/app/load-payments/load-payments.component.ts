import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-load-payments',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider
  ],
  templateUrl: './load-payments.component.html',
  styleUrl: './load-payments.component.css'
})
export class LoadPaymentsComponent {

}
