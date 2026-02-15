import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rubleCurrency',
  standalone: true
})
export class RubleCurrencyPipe implements PipeTransform {

  transform(value: string | number): string {
    if (value == null || value == '') {
      value = '';
    }
    return `${value} руб.`;
  }

}
