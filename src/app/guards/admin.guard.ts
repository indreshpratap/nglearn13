import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../providers/user.service';

@Injectable({providedIn:'root'})
export class AdminGuard implements CanActivate,CanActivateChild {

    constructor(private userSvc: UserService, private router:Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate admin');
        return this.isLoggedIn();
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canactivate child admin');
        return this.isLoggedIn();
        
    }

    isLoggedIn(){
        if(this.userSvc.loggedIn && this.userSvc.userInfo.role==='admin'){
            return true;
        }else {
            this.router.navigateByUrl('/');
            return false;
        }
    }
}
