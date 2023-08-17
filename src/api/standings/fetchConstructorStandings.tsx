import { QueryFunction } from "@tanstack/react-query";
import { IConstructorStandingLists } from "../../models/interfaces";

const fetchConstructorStandings: QueryFunction<
  IConstructorStandingLists
> = async () => {
  const apiRes = await fetch(
    `https://ergast.com/api/f1/current/constructorStandings.json`
  );
  if (!apiRes.ok) {
    throw new Error("Current Constructor Standings fetch not ok");
  }
  return apiRes.json();
};
export default fetchConstructorStandings;
