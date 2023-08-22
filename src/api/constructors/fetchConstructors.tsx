import { QueryFunction } from "@tanstack/react-query";
import { IConstructorList } from "../../models/interfaces";

const fetchConstructors: QueryFunction<IConstructorList> = async () => {
  const apiRes = await fetch(
    `https://ergast.com/api/f1/constructors.json?limit=250`
  );
  if (!apiRes.ok) {
    throw new Error("Constructors fetch not ok");
  }
  return apiRes.json();
};
export default fetchConstructors;
