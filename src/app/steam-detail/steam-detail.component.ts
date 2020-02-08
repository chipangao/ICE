import { Component, OnInit, Input } from '@angular/core';
import { match } from '../data/match.module';
import { team } from '../data/team.module';
import { table } from '../data/Standing.module';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steam-detail',
  templateUrl: './steam-detail.component.html',
  styleUrls: ['./steam-detail.component.css']
})
export class SteamDetailComponent implements OnInit {
  @Input()
  matchid: String;
  teamid:String;
  m:match[];
  SCHEDULEDm:match[];
  t : team[];
  stand:table[];

  constructor(private apiService:ApiService,
              private route:ActivatedRoute,
              ) { }

ngOnInit() {
  this.getmatchid();
  this.getSCHEDULEDmatch();
  this.getteams();
  this.getteamid();
}
getSCHEDULEDmatch(){
  this.apiService.getSCHEDULEDmatch().subscribe(match=>{
    this.SCHEDULEDm = match;
    console.log(this.SCHEDULEDm);
  })
 }
getmatchid(){
   this.matchid = this.route.snapshot.paramMap.get('id');
  console.log(this.matchid);
}
getteamid(){
this.teamid = this.route.snapshot.paramMap.get('id');
console.log(this.teamid);
}
getteams(){
  this.apiService.getteam().subscribe(team=>{
    this.t = team;
    console.log(this.t);
  });
}

}
