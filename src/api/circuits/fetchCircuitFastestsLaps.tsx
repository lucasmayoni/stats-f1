import { QueryFunction } from "@tanstack/react-query";
import { IResultLists } from "../../models/interfaces";

const fetchCircuitFastestsLaps: QueryFunction<IResultLists> = async ({
  queryKey,
}) => {
  const id = queryKey[1];
  const apiRes = await fetch(
    `https://api.jolpi.ca/ergast/f1/circuits/${id}/fastest/1/results.json`
  );
  if (!apiRes.ok) {
    throw new Error("Circuit fetch not ok");
  }

  return apiRes.json();
};
export default fetchCircuitFastestsLaps;
