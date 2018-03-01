import { Pipe, PipeTransform } from '@angular/core';

//Return the number of days from the start date

@Pipe({
  name: 'datefromstart'
})
export class DatefromstartPipe implements PipeTransform {

  transform(value: string ,startDate:string): number {
       
        let t1 = Date.parse(startDate);
        let t2 = Date.parse(value);

        let days = ((t2-t1)/(24*3600*1000));
         
        return(days);
  }

}
