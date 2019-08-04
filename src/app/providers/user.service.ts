import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    loggedIn = false;
    userInfo:any = {};

    afterLogin = new Subject();

    constructor(){
        this.restoreInfo();
    }

    setUserInfo(userInfo) {
        this.loggedIn = true;
        this.userInfo = userInfo;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.afterLogin.next();
        // localStorage.setItem('token', userInfo.token);
        // localStorage.setItem('name', userInfo.name);
        // localStorage.setItem('role', userInfo.role);
        // localStorage.setItem('id', userInfo.id);
    }

    logout() {
        this.loggedIn = false;
        localStorage.removeItem('userInfo');
        this.afterLogin.next();
    }

    restoreInfo(){
        let data = localStorage.getItem('userInfo');
        if(data){
            this.userInfo = JSON.parse(data);
            this.loggedIn = true;
            this.afterLogin.next();
        }
    }

    getToken() {
        return this.userInfo ? this.userInfo.token: '';
    }

    hasToken() {
        return this.getToken() !== null;
    }
}