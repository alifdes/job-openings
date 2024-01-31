import React, { useEffect, useState } from "react";
import JobCard from "../ui/JobCard";
import { useJobs } from "../queries/jobs";
import { HorizontalLine } from "../styles";

const OtherJoblistComponent = ({ deptID }) => {
  const filterData = { department: { value: deptID } };
  const { data: jobsData, isLoading } = useJobs(filterData);

  return (
    <div>
      <h1> OTHER JOB OPENINGS</h1>
      <HorizontalLine />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {jobsData?.map((job, index) => (
            <div key={index}>
              <JobCard title={job.title} location={job.location} id={job.id} show={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OtherJoblistComponent;
