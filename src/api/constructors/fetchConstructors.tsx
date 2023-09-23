import { QueryFunction } from "@tanstack/react-query";
import { IConstructorList } from "../../models/interfaces";

const fetchConstructors: QueryFunction<IConstructorList,  ["search", { season: string }]> = async ({queryKey}) => {
  const {season} = queryKey[1];
  const apiRes = await fetch(
    `https://ergast.com/api/f1/${season}/constructors.json`
  );
  if (!apiRes.ok) {
    throw new Error("Constructors fetch not ok");
  }
  return apiRes.json();
};
export default fetchConstructors;
