import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '@app/_services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AccountService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) 
    { 
      return true; 
    }else{
      this.router.navigate(['/account/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
      return false;
    }    
  }
}