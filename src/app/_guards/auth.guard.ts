import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
        return this.auth.isLoggedIn.pipe(
            take(1),
            map((isLoggedIn: boolean) => {
              console.log('isLoggedIn', isLoggedIn);
              if (!isLoggedIn) {
                this.router.navigate(['/home']);
                return false;
              }
              return true;
            })
          );
    }
}