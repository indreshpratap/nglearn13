import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'trim',pure:true})
export class TrimPipe implements PipeTransform {
    
    transform(value: string,length=100,suffix='...'): any {
        console.log("trim pipe running for =>", value);
        if(value && value.length > length){
            return value.substr(0,length)+suffix;
        }else {
            return value;
        }
    }
}