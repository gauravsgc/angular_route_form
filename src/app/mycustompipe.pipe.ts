import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe',
  standalone: true
})
export class MycustompipePipe implements PipeTransform {

  transform(value: number, ...args:number[]): unknown {
   const [x]=args;//2
   return value*x;
  }

}
