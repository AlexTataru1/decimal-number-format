import {NgModule, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'decimalFormat'
})
export class DecimalCurrencyPipe implements PipeTransform {
  transform(value: string | number, locale: string = 'en'): string {
    if (!value || value === '-') {
      return value.toString();
    }

    const formattedValue = value.toString().replace(/[^\-0-9]/g, '');
    return new Intl.NumberFormat(locale).format(+formattedValue);
  }
}

@NgModule({
  declarations: [DecimalCurrencyPipe],
  exports: [DecimalCurrencyPipe]
})
export class DecimalCurrencyPipeModule {}
