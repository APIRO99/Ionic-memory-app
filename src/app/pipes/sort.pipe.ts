import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr:Array<Game>, ...args: unknown[]): unknown {
    arr?.sort((a, b) => (b.time - a.time)) 
    return arr;
  }
}