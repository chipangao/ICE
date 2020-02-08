import { Pipe, PipeTransform } from '@angular/core';
import { team } from './data/team.module';

@Pipe({
  name: 'getteamUrl',pure:false
})
export class GetteamUrlPipe implements PipeTransform {

  transform(getteamUrl: team[],crestUrl:String): any {
    if(!getteamUrl){
      return getteamUrl;
    }
  return getteamUrl.filter(getteamUrl=>(   ( "" + getteamUrl.id).indexOf(crestUrl.toString())!==-1));
  }

}
