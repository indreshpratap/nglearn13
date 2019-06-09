import { FormControl } from '@angular/forms';

export class MyValidators {
    static addressAlphaNum(control: FormControl): { addressAlphaNum: boolean } {
        let value = control.value;
        if (!value) {
            return null; // no error
        }
        if (/^[/a-zA-Z0-9 -]+$/.test(value)) {
            return null; // no error
        } else {
            return { addressAlphaNum: true }; // has error
        }

    }
}