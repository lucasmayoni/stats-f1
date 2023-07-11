export interface IResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  };
}
export interface IResultLists {
  MRData: {
    RaceTable: {
      season: string;
      round: string;
      Races: [
        {
          season: string;
          round: string;
          url: string;
          raceName: string;
          Circuit: {
            circuitId: string;
            url: string;
            circuitName: string;
            Location: {
              lat: string;
              long: string;
              locality: string;
              country: string;
            };
          };
          date: string;
          time: string;
          Results: IResult[];
        }
      ];
    };
  };
}

export interface ISeasons {
  MRData: {
    SeasonTable: {
      Seasons: {
        season: number;
        url: string;
      }[];
    };
  };
}
export interface IDriver {
  MRData: {
    DriverTable: {
      Drivers: {
        driverId: number;
        permanentNumber: number;
        code: string;
        url: string;
        givenName: string;
        familyName: string;
        dateOfBirth: string;
        nationality: string;
      }[];
    };
  };
}

export interface ICiruit {
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

export interface IDriverStandings {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        season: string;
        round: string;
        DriverStandings: {
          position: string;
          positionText: string;
          points: string;
          wins: string;
          Driver: {
            driverId: string;
            permanentNumber: string;
            code: string;
            url: string;
            givenName: string;
            familyName: string;
            dateOfBirth: string;
          };
        };
      }[];
    };
  };
}

export interface IRace {
  season: string;
  round: number;
  url: string;
  raceName: string;
  Circuit: ICiruit;
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
      season: string;
      Races: IRace[];
    };
  };
}
