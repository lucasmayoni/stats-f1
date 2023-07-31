import { QueryFunction } from "@tanstack/react-query";
import { IRaceLists } from "../models/interfaces";

const fetchRaces: QueryFunction<
  IRaceLists,
  ["search", { season: string }]
> = async ({ queryKey }) => {
  const { season } = queryKey[1];
  const apiRes = await fetch(`https://ergast.com/api/f1/${season}.json`);

  if (!apiRes.ok) {
    throw new Error("Schedules not found");
  }

  return apiRes.json();
};
export default fetchRaces;
