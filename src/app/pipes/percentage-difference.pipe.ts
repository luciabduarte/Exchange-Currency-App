import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageDifference',
})
export class PercentageDifferencePipe implements PipeTransform {
  transform(value: number, comparedValue: number, decimals: number = 2): { value: string; isPositive: boolean } {
    if (!value || !comparedValue) return { isPositive: true, value: '0' };

    const difference = 100 * Math.abs((value - comparedValue) / ((value + comparedValue) / 2));

    const isPositive = comparedValue > value ? true : false;
    const sign = isPositive ? '+' : '-';

    return {
      value: `${sign}${difference.toFixed(decimals)}%`,
      isPositive,
    };
  }
}
