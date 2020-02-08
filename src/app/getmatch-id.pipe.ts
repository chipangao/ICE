import { Pipe, PipeTransform } from '@angular/core';
import { match, HomeTeam } from './data/match.module';


@Pipe({
  name: 'getmatchId',pure:false
})
export class GetmatchIdPipe implements PipeTransform {

  transform(getmatchId: match[], id:String): match[] {
    if(!getmatchId){
      return getmatchId;
    }
  return getmatchId.filter(getmatchId=>(   ( "" + getmatchId.id).indexOf(id.toString())!==-1));
  }

}
