export class match{
    id: number;
    season: season[];
    utcDate: Date;
    status: String;
    attendance: number;
    stage: string;
    group: string;
    lastUpdated:Date;
    homteam:[];
    awayTeam:[];
}
export class awayTeam{
  id:number;
  name:string;
  crestUrl:string;
  coach:coach[];
  captain:captain[];
  lineup:lineup[];
}

export class season{
    id: number;
    startDate: Date;
    endDate: Date;
    currentMatchday: number;
}

export class HomeTeam{
    id:number;
    name:string;
    crestUrl:string;
    coach:coach[];
    captain:captain[];
    lineup:lineup[];
}

export class coach{
    id:number;
    name:string;
    countryOfBirth: string;
    nationlity: string;
}
export class captain{
    id:number;
    name:string;
    shirtNumber:number;
}
export class lineup{
    id:number;
    name:string;
    position:string;
    shirtNumber:number;
}
