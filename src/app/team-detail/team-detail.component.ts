import { Component, OnInit, Input } from '@angular/core';
import { team } from '../data/team.module';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { match } from '../data/match.module';
import {Location} from '@angular/common';
import { table } from '../data/Standing.module';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  @Input()
  matchid: String;
  teamid:String;
  m:match[];
  SCHEDULEDm:match[];
  t : team[];
  stand:table[];

  constructor(private apiService:ApiService,
              private route:ActivatedRoute,
              private location:Location) { }

ngOnInit() {
  this.getmatchid();
  this.getdata();
  this.getSCHEDULEDmatch();
  this.getteams();
  this.getteamid();
  this.getStanding();
}
getdata(){
    this.apiService.getmatch().subscribe(match=>{
    this.m = match;
    console.log(this.m);
  });
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
getStanding(){
  this.apiService.getStanding().subscribe(table=>{
    this.stand = table;
    console.log(this.stand);
  });
}
goBack():void{
  this.location.back();
}
}
