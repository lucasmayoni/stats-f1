import { QueryFunction } from "@tanstack/react-query";
import { IDriver, IDriverStandingsLists } from "../../models/interfaces";

const fetchDriverStandings: QueryFunction<IDriverStandingsLists> = async ({
  queryKey,
}) => {
  const id = queryKey[1];
  const apiRes = await fetch(
    `https://api.jolpi.ca/ergast/f1/2024/drivers/${id}/driverStandings.json`
  );

  if (!apiRes.ok) {
    throw new Error("DriverStandings fetch not ok");
  }

  return apiRes.json();
};
export default fetchDriverStandings;
