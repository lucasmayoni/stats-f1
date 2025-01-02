import { QueryFunction } from "@tanstack/react-query";
import { ISeasons } from "../models/interfaces";

const fetchSeasons: QueryFunction<ISeasons> = async () => {
  const apiRes = await fetch(
    `https://api.jolpi.ca/ergast/f1/seasons.json?limit=100&offset=60`
  );

  if (!apiRes.ok) {
    throw new Error("Seasons fetch not ok");
  }
  return apiRes.json();
};
export default fetchSeasons;
