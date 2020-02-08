import { Component, OnInit ,Input } from '@angular/core';
import { team } from '../data/team.module';
import { ApiService } from '../api.service';
import { TeamService } from '../team.service';
import { table } from '../data/Standing.module';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  t : team[];
  teamURL: string;
  teamID: string;
  stand:table[];

  constructor(private apiService:ApiService,
    private route:ActivatedRoute,) { }

  ngOnInit() {
    this.getTeams();
    this.getStanding();
  }
  getTeams(){
    this.apiService.getteam().subscribe(team=>{
      this.t = team;
      console.log(this.t);
    })
  }
  getStanding(){
    this.apiService.getStanding().subscribe(table=>{
      this.stand = table;
      console.log(this.stand);
    });
  }

}
