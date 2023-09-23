import React, { createContext, useContext } from "react";
import { ISeasons } from "../../models/interfaces";
import { useQuery } from "@tanstack/react-query";
import fetchSeasons from "../../api/fetchSeasons";

const SeasonContext = createContext<ISeasons | undefined>(undefined);

interface SeasonProviderProps {
  children: React.ReactNode;
}

function SeasonProvider({ children }: SeasonProviderProps) {
  const fetchedSeasons = useQuery([], fetchSeasons);
  const seasons = fetchedSeasons.data;

  return (
    <SeasonContext.Provider value={seasons}>{children}</SeasonContext.Provider>
  );
}

export function useSeason(): ISeasons | undefined {
  return useContext(SeasonContext);
}

export default SeasonProvider;
