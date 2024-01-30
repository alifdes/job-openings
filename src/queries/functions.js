
import { useQuery, useQueryClient } from "react-query";
import { getFunctions } from "../services/functions.service";

export const useFunctions = () => {
  return useQuery(
    'functions',
    getFunctions,
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};
