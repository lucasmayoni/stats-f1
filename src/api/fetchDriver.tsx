import { QueryFunction } from "@tanstack/react-query";
import { IDriver } from "../models/interfaces";

const fetchDriver: QueryFunction<IDriver> = async ({ queryKey }) => {
  const code = queryKey[1];
  const apiRes = await fetch(`http://ergast.com/api/f1/drivers/${code}.json`);

  if (!apiRes.ok) {
    throw new Error("Driver fetch not ok");
  }

  return apiRes.json();
};
export default fetchDriver;
