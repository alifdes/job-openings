import React, { useEffect, useState } from "react";
import JobCard from "../ui/JobCard";
import { useJobs } from "../queries/jobs";

const OtherJoblistComponent = ({ deptID }) => {

    const filterData = { department: { value: deptID } };
    const { data: jobsData, isLoading } = useJobs(filterData);

  return (
    <div>
        
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {jobsData?.map((job, index) => (
            <div key={index}>
              <JobCard title={job.title} location={job.location} id={job.id} />
            </div>
          ))}
     </div>
      )}
    </div>
  );
};

export default OtherJoblistComponent;
