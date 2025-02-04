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

 export  class AuthorizationGuard   implements  CanActivate{

  constructor(private  authService:AuthService , private routes:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    let authorizedRoles : string[] = route.data['roles'] ;
    let roles : string[] = this.authService.roles ;
    for (let role of roles) {
      if(authorizedRoles.includes(role)){
        return true;
      }
    }
   return  false;
  }

}
