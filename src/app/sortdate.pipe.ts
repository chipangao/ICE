import { Pipe, PipeTransform } from '@angular/core';
import { match } from './data/match.module';

@Pipe({
  name: 'sortdate'
})
export class SortdatePipe implements PipeTransform {

  transform(getmatch):  match[]{
    if(!getmatch){
      return getmatch;
    }
    return getmatch.sort((a,b)=>{
    let dataA = Number(new Date(a.utcDate));
    let dataB = Number(new Date(b.utcDate));
    return dataB<dataA ?-1:(dataB>dataA?1:0)
  });
  }

}
