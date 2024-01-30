import { useQuery } from "react-query";
import { getDepartments } from "../services/departments.service";

export const useDepartments = () => {
  return useQuery(
    'departments',
    getDepartments,
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};
