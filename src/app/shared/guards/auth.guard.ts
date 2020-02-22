import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.userService.isLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
