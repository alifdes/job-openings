
import { useQuery} from "react-query";
import { getLocations } from "../services/locations.service";

export const useLocations = () => {
  return useQuery(
    'locations',
    getLocations,
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};