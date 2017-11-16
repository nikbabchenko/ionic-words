import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizeLetter'
})

export class capitalizeLetterPipe implements PipeTransform {
    transform(value: any): any {
        return value.slice(0,1).toUpperCase() + value.slice(1);
    }
}
