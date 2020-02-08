import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import {team}from './data/team.module';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  teams = [];

  getTeams(): Observable<team[]> {
    return of(this.teams);
  }
}
