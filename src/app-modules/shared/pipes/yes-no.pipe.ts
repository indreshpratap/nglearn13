import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesno' })
export class YesNoPipe implements PipeTransform {

    transform(value: boolean): string {
        return value ? 'Yes' : 'No';
    }
}