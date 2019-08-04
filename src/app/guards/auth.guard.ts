import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../providers/user.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate,CanActivateChild {

    constructor(private userSvc: UserService, private router:Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate auth');
        return this.isLoggedIn();
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate child auth');
        return this.isLoggedIn();
        
    }

    isLoggedIn(){
        if(this.userSvc.loggedIn){
            return true;
        }else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
