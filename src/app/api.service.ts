import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { match } from './data/match.module';
import { Observable, of } from 'rxjs';
import { team } from './data/team.module';
import { table } from './data/Standing.module';
import { player } from './data/player.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private matchUrl = 'https://api.football-data.org/v2/matches/';

  [x: string]: any;

  API_KEY = new HttpHeaders().set("X-Auth-Token",'985114b183494150aa6c65002cc3a64d');

  constructor(private httpClient: HttpClient) { }

  public getmatch():Observable<match[]>{

    return this.httpClient.get<match[]>('https://api.football-data.org/v2/competitions/2021/matches?status=FINISHED',{headers: this.API_KEY});
  }
  public getSCHEDULEDmatch():Observable<match[]>{

    return this.httpClient.get<match[]>('https://api.football-data.org/v2/competitions/2021/matches?status=SCHEDULED',{headers: this.API_KEY});
  }
  public getteam():Observable<team[]>{

    return this.httpClient.get<team[]>('http://api.football-data.org/v2/competitions/2021/teams',{headers: this.API_KEY});
  }
  public getplayer():Observable<player[]>{

    return this.httpClient.get<player[]>('https://api.football-data.org/v2/competitions/2021/scorers',{headers: this.API_KEY});
  }
  public getOneteam(id:number):Observable<team[]>{
    const url = '${this.httpClient}/${id}';
    console.log(url);
    return this.httpClient.get<team[]>('http://api.football-data.org/v2/teams/${id}',{headers: this.API_KEY});
  }
  public getStanding():Observable<table[]>{

    return this.httpClient.get<table[]>('https://api.football-data.org/v2/competitions/2021/standings/',{headers: this.API_KEY});
  }
  public getmatchid(id:number):Observable<match>{
    const url = '${this.httpClient}/${id}';
    console.log(url);
    return this.httpClient.get<match>('https://api.football-data.org/v2/matches/${id}',{headers: this.API_KEY});
  }
  public getteamid(id:number):Observable<team>{
    const url = '${this.httpClient}/${id}';
    console.log(url);
    return this.httpClient.get<team>('https://api.football-data.org/v2/teams/${id}',{headers: this.API_KEY});
  }
  public getstandid(id:number):Observable<table>{
    const url = '${this.httpClient}/${id}';
    console.log(url);
    return this.httpClient.get<table>('hhttps://api.football-data.org/v2/competitions/2021/standings/${id}',{headers: this.API_KEY});
  }
}
