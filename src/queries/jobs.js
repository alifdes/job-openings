import { useQuery  } from "react-query";
import { getJob, getJobs } from "../services/jobs.service";

export const useJobs = (filterData) => {
  return useQuery(
    ["jobs", filterData],
    () => getJobs(filterData),
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};

export const useJob = (id) => {
  
  return useQuery(
    ["job", id],
    () => getJob(id), 
    {
      keepPreviousData: true,
      staleTime: 60 * 60 * 1000,
    }
  );
};