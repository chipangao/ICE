export class players{
  scorers:[];
}
export class scorers{
  player:[];
  team:[];
  numberOfGoals:number;
}
export class player{
  id:number;
  name:string;
  firstName:string;
  lastName:string;
  dateOfBirth:Date;
  countryOfBirth:string;
  nationality:string;
  position:String;
}
export class team{
  id:number;
  name:string;
}