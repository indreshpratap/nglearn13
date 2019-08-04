import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../providers/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router:Router,private userSvc: UserService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let token = this.userSvc.getToken();
        let cloned = req.clone({
             setHeaders: { 
                 'Authorization': 'Bearer ' + token
                } 
            }
        )
        return next.handle(cloned).pipe(catchError(err=>{
            
            if(err instanceof HttpErrorResponse){
                let httpError = (err as HttpErrorResponse);
                if(httpError.status===403 || httpError.status ===401){
                    this.router.navigate(['/']);
                }
            }
            
           return throwError(err);
        }));
    }
}