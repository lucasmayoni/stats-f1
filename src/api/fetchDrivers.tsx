import { QueryFunction } from "@tanstack/react-query";
import { IDriverList } from "../models/interfaces";

const fetchDrivers: QueryFunction<IDriverList> = async ({ queryKey }) => {
  const year = queryKey[1];
  const apiRes = await fetch(`http://ergast.com/api/f1/${year}/drivers.json`);

  if (!apiRes.ok) {
    throw new Error("Drivers fetch not ok");
  }

  return apiRes.json();
};

export default fetchDrivers;
