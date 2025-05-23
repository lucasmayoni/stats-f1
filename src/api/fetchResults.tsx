import { QueryFunction } from "@tanstack/react-query";
import { IResultLists } from "../models/interfaces";

const fetchSearchResults: QueryFunction<
  IResultLists,
  ["search", { season: string; round: string }]
> = async ({ queryKey }) => {
  const { season, round } = queryKey[1];
  const apiRes = await fetch(
    `https://api.jolpi.ca/ergast/f1/${season}/${round}/results.json`
  );

  if (!apiRes.ok) {
    throw new Error("Drivers fetch not ok");
  }

  return apiRes.json();
};

export default fetchSearchResults;
