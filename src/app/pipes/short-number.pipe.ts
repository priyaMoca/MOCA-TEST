import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(input: any) {
    let exp;
    if (Number.isNaN(input)) {
        return null;
    }
    
    if (input === undefined) {
        return 0;
    }
    return input.toFixed(2);
  }

}
