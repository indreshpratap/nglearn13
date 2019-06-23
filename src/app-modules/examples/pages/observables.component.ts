import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, interval, Subscription } from 'rxjs';
import { map, filter, retry } from 'rxjs/operators';
@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html'

})
export class ObservablesComponent implements OnDestroy {

    intObser:Subscription;
    start1() {
        let observable = new Observable((subscriber) => {
            console.log('Starting observable');
            subscriber.next(1);
            setTimeout(() => {
                subscriber.next(2);
            }, 1000);
            setTimeout(() => {
                subscriber.next(3);
                //  subscriber.error('this is an error');
                subscriber.complete();

            }, 2000);
            setTimeout(() => {
                subscriber.next(2);
            }, 3000);
            setTimeout(() => {
                subscriber.next(1);
                subscriber.next(4);
                // subscriber.complete();
            }, 4000);

        });

        observable
            .pipe(retry(2),
                map((m: number) => m * 3))
            .subscribe(
                //first parameter is success
                (data) => {
                    console.log('First ==> ', data);
                },
                //second parameter is error
                (err) => {
                    console.log("First error handler", err);
                },
                // third parameter is successfully completed
                () => {
                    console.log('First is complete');
                });

        observable
            .pipe(filter(m => m > 2))
            .subscribe(
                (data) => {
                    console.log('Second ==> ', data);
                }, (err) => {
                    console.log("Second error handler", err);
                });

    }

    start2() {
    this.intObser = interval(1000)
            .subscribe(intv => {
                console.log('interval', intv);
            });

        // setTimeout(() => {
        //     this.intObser.unsubscribe();
        // }, 10000);



    }

    // life cycle hook 
    ngOnDestroy(){
        if(this.intObser){
            this.intObser.unsubscribe();
        }
    }
}
