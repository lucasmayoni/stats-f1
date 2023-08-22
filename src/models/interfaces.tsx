export interface ISeason {
  season: number;
  url: string;
}

export interface IStatus {
  statusId: number;
  count?: number;
  status: string;
}

export interface ICircuitDriverStandings {
  MRData: {
    total: number;
    StandingsTable: {
      driverId: string;
      StandingList: [
        {
          season: number;
          round: number;
          DriverStandings: IDriverStandings[];
        }
      ];
    };
  };
}

export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: number;
    long: number;
    locality: string;
    country: string;
  };
}

export interface IConstructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface IConstructorList {
  MRData: {
    ConstructorTable: {
      Constructors: IConstructor[];
    };
  };
}

export interface ILap {
  rank: string;
  lap: number;
  Time: {
    time: string;
  };
  AverageSpeed: {
    units: string;
    speed: number;
  };
}

export interface IConstructorStanding {
  position: number;
  positionText: string;
  points: number;
  wins: number;
  Constructor: IConstructor;
}

export interface IConstructorStandingLists {
  MRData: {
    StandingsTable: {
      season: number;
      StandingsLists: [
        {
          season: number;
          round: number;
          ConstructorStandings: IConstructorStanding[];
        }
      ];
    };
  };
}

export interface IDriver {
  driverId: string;
  permanentNumber: number;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface IResult {
  number: string;
  position: number;
  positionText: string;
  points: string;
  Driver: IDriver;
  Constructor?: IConstructor;
  grid?: number;
  laps?: string;
  status: string;
  Time?: {
    millis: number;
    time: string;
  };
  FastestLap?: ILap;
}
export interface IResultLists {
  MRData: {
    RaceTable: {
      season: number;
      round: string;
      Races: [
        {
          season: number;
          round: number;
          url: string;
          raceName: string;
          Circuit: ICircuit;
          date: string;
          time: string;
          Results: IResult[];
        }
      ];
    };
  };
}

export interface IDriverStandings {
  position: number;
  positionText: string;
  points: number;
  wins: number;
  Driver: IDriver;
  Constructors: IConstructor[];
}

export interface IDriverStandingsLists {
  MRData: {
    StandingsTable: {
      driverId: string;
      season: number;
      round: number;
      StandingsLists: {
        season: number;
        round: number;
        DriverStandings: IDriverStandings[];
      }[];
    };
  };
}

export interface IQualifyingResult {
  number: number;
  position: number;
  Driver: IDriver;
  Constructor: IConstructor;
  Q1: string;
  Q2?: string;
  Q3?: string;
}

export interface IQualifyingResultLists {
  MRData: {
    RaceTable: {
      season: number;
      round: string;
      Races: [
        {
          season: number;
          round: string;
          url: string;
          raceName: string;
          Circuit: ICircuit;
          date: string;
          time: string;
          QualifyingResults: IQualifyingResult[];
        }
      ];
    };
  };
}

export interface ISeasons {
  MRData: {
    SeasonTable: {
      Seasons: ISeason[];
    };
  };
}

export interface IDriverList {
  MRData: {
    DriverTable: {
      Drivers: IDriver[];
    };
  };
}

export interface IRace {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: ICircuit;
  date: string;
  time: string;
  FirstPractice: {
    date: string;
    time: string;
  };
  SecondPractice: {
    date: string;
    time: string;
  };
  ThirdPractice: {
    date: string;
    time: string;
  };
  Qualifying: {
    date: string;
    time: string;
  };
  Sprint: {
    date: string;
    time: string;
  };
}

export interface IRaceLists {
  MRData: {
    RaceTable: {
      season: number;
      Races: IRace[];
    };
  };
}

export interface ISchedule {
  FirstPractice: {
    date: string;
    time: string;
  };
  SecondPractice: {
    date: string;
    time: string;
  };
  ThirdPractice?: {
    date: string;
    time: string;
  };
  Qualifying?: {
    date: string;
    time: string;
  };
  Sprint?: {
    date: string;
    time: string;
  };
}
