import { Component, OnInit } from '@angular/core';
import { match } from '../data/match.module';
import { ApiService } from '../api.service';
import { team } from './../data/team.module';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],

})
export class MatchComponent implements OnInit {

  m : match[];
  t : team[];


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getmatches();
    this.getteams();
  }
  getmatches(){
    this.apiService.getmatch().subscribe(match=>{
      this.m = match;
      console.log(this.m);
    });
  }
  getteams(){
    this.apiService.getteam().subscribe(team=>{
      this.t = team;
      console.log(this.t);
    });
  }

}

