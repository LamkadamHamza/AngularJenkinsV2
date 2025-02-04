import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})

 export  class AuthGuard implements  CanActivate{

  constructor(private  authService:AuthService , private routes:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.authenticated == true)
    {
      return true;
    }else{
      this.routes.navigateByUrl("/login")
      return false;
    }

  }


}
