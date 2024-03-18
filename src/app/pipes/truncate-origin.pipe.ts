import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateOrigin'
})
export class TruncateOriginPipe implements PipeTransform {

  transform(value: string): string {
    const index = value.indexOf('(');
    return index !== -1 ? value.slice(0, index) : value;
  }

}
