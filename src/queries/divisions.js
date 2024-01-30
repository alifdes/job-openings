
import { useQuery } from "react-query";
import { getDivisions } from "../services/divisions.service";
export const useLocations = () => {
  return useQuery(
    'divisions',
    getDivisions,
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};
