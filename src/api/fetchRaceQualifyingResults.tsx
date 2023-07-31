import { QueryFunction } from "@tanstack/react-query";
import { IQualifyingResultLists } from "../models/interfaces";

const fetchRaceQualifyingResults: QueryFunction<
  IQualifyingResultLists,
  ["search", { season: string; round: string }]
> = async ({ queryKey }) => {
  const { season, round } = queryKey[1];
  const apiRes = await fetch(
    `https://ergast.com/api/f1/${season}/${round}/qualifying.json`
  );

  if (!apiRes.ok) {
    throw new Error("Qualifying results fetch not ok");
  }

  return apiRes.json();
};

export default fetchRaceQualifyingResults;
