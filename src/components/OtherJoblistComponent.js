import React, { useEffect, useState } from "react";
import JobCard from "../ui/JobCard";
import { useJobs } from "../queries/jobs";
import { HorizontalLine } from "../styles";

const OtherJoblistComponent = ( value ) => {
  const filterData = { department:value};
  const { data: jobsData, isLoading } = useJobs(filterData);

  return (
    <div>
      <h1> OTHER JOB OPENINGS</h1>
      <HorizontalLine />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
        {/* Render jobs if data is available */}
        {jobsData && jobsData.length > 0 ? (
          jobsData.map((job, index) => (
            <div key={index}>
              <JobCard title={job.title} location={job.location} id={job.id} show={false} />
            </div>
          ))
        ) : (
          // Render message if no data is available
          <div>No job openings </div>
        )}
      </div>
      )}
    </div>
  );
};

export default OtherJoblistComponent;
