import {Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawerContent, MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {NgIf} from "@angular/common";
import {AuthGuard} from "../gaurds/auth.guard";

@Component({
  selector: 'app-admin-template',
  standalone: true,
  providers:[AuthGuard],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
    MatMenuItem,
    MatSidenavModule,
    MatList,
    MatListItem,
    RouterOutlet,
    RouterLink,
    NgIf
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'

})
export class AdminTemplateComponent implements OnInit{

  constructor(public authService : AuthService) {
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }
}
