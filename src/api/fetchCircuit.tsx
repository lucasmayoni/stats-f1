import { QueryFunction } from "@tanstack/react-query";
import { ICircuit } from "../models/interfaces";

const fetchCircuit: QueryFunction<ICircuit> = async ({ queryKey }) => {
  const circuitId = queryKey[1];
  const apiRes = await fetch(
    `https://ergast.com/api/f1/circuits/${circuitId}.json`
  );

  if (!apiRes.ok) {
    throw new Error("Circuit fetch not ok");
  }

  const result = await apiRes.json();
  return result.MRData.CircuitTable.Circuits[0];
};
export default fetchCircuit;
