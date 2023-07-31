import { QueryFunction } from "@tanstack/react-query";
import { IDriver } from "../models/interfaces";

const fetchDriver: QueryFunction<IDriver> = async ({ queryKey }) => {
  const code = queryKey[1];
  const apiRes = await fetch(`https://ergast.com/api/f1/drivers/${code}.json`);

  if (!apiRes.ok) {
    throw new Error("Driver fetch not ok");
  }

  const result = await apiRes.json();
  return result.MRData.DriverTable.Drivers[0];
};
export default fetchDriver;
