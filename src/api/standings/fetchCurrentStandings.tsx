import { QueryFunction } from "@tanstack/react-query";
import { IDriverStandingsLists } from "../../models/interfaces";

const fetchCurrentStandings: QueryFunction<
  IDriverStandingsLists
> = async () => {
  const apiRes = await fetch(
    `https://api.jolpi.ca/ergast/f1/current/driverStandings.json`
  );
  if (!apiRes.ok) {
    throw new Error("Current Standings fetch not ok");
  }
  return apiRes.json();
};
export default fetchCurrentStandings;
