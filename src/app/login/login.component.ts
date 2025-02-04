import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    MatCardActions,
    MatButton,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit{

  public  LoginForm! : FormGroup;
  constructor(private  fb: FormBuilder , private  auth:AuthService , private router:Router) {
  }
  ngOnInit(): void {
   this.LoginForm = this.fb.group({
      username : this.fb.control(''),
     password : this.fb.control('')
    })
  }

  login() {
    let username = this.LoginForm.value.username;
    let password = this.LoginForm.value.password;
    let auth : boolean =this.auth.login(username,password) ;
       if(auth){
        this.router.navigateByUrl("admin")
       }
  }
}
