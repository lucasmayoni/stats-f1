import { QueryFunction } from "@tanstack/react-query";
import { IConstructorList, IDriver, IDriverList } from "../../models/interfaces";
import axios from "axios";

export const fetchConstructors: QueryFunction<IConstructorList, ["search", { season: string }]> = async ({ queryKey }) => {
  const { season } = queryKey[1];
  const apiRes = await fetch(
    `https://ergast.com/api/f1/${season}/constructors.json`
  );
  if (!apiRes.ok) {
    throw new Error("Constructors fetch not ok");
  }
  return apiRes.json();
};

export const constructorWithDrivers = async (season: string, team: string): Promise<IDriverList> => {
  const api = axios.create({
    baseURL: 'https://ergast.com/api/f1'
  });
  try {
    const response = await api.get(`/${season}/constructors/${team}/drivers.json`)
    return response.data as IDriverList;
  } catch (error) {
    throw error;
  }
}