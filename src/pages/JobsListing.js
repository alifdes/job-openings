import React, { useState, useEffect } from "react";
import SearchBox from "../ui/SearchBox";
import SelectBox from "../ui/SelectBox";
import {
  TopContainer,
  DropdownContainer,
  MainDiv,
  BottomContainer,
} from "../styles";
import JobCard from "../ui/JobCard";
import SelectedFilters from "../components/SelectedFilters";
import { useJobs } from "../queries/jobs";
import Loader from "../ui/Loader";
import { useDepartments } from "../queries/departments";
import { useLocations } from "../queries/locations";
import { useFunctions } from "../queries/functions";

function JobListing() {
  //state variables
  const [groupedJobs, setGroupedJobs] = useState({});

  const [filterData, setFilterData] = useState(() => {
    const savedFilterData = localStorage.getItem("filterData");
    return savedFilterData
      ? JSON.parse(savedFilterData)
      : {
          searchString: null,
          location: {},
          department: {},
          division: {},
          function: {},
        };
  });

  //APi calls using react query
  const { data: jobsData, isLoading, refetch } = useJobs(filterData);
  const { data: departments, isLoading: departmentsLoading } = useDepartments();
  const { data: locations, isLoading: locationsLoading } = useLocations();
  const { data: functions, isLoading: functionsLoading } = useFunctions();

  // save filter data to local storage to retain the applied filters on navigation to details page and back or refresh of page.
  useEffect(() => {
    localStorage.setItem("filterData", JSON.stringify(filterData));
  }, [filterData]);

  // call jobs api when filterData updated
  useEffect(() => {
    refetch();
  }, [filterData, refetch]);

  // Job openings grouped by Department.
  useEffect(() => {
    const updateGroupedJobs = () => {
      const updatedJobs = {};
      for (let i = 0; i < jobsData?.length; i++) {
        const job = jobsData[i];
        const { department } = job;
        const deptId = department ? department.id : null;
        const deptTitle = department ? department.title : null;
        if (!updatedJobs[deptId]) {
          updatedJobs[deptId] = { id: deptId, title: deptTitle, jobs: [] };
        }
        updatedJobs[deptId].jobs.push(job);
      }
      setGroupedJobs(updatedJobs);
    };
    updateGroupedJobs();
  }, [jobsData]);

  // dropdown options data
  const locationOptions = locations?.map((location) => ({
    value: location.id,
    label: location.title,
  }));

  const departmentOptions = departments?.map((department) => ({
    value: department.id,
    label: department.title,
  }));
  const functionOptions = functions?.map((func) => ({
    value: func.id,
    label: func.title,
  }));

  //functionality code  to remove applied filter when a X button clicked
  const handleRemoveFilter = (filterKey) => {
    setFilterData((prevSelectedOption) => ({
      ...prevSelectedOption,
      [filterKey]: {},
    }));
  };

  //functionality code  to clear applied filters
  const handleClearAllFilters = () => {
    setFilterData({
      location: {},
      department: {},
      function: {},
    });
  };

  return (
    <MainDiv>
      <TopContainer>
        {/* Search and Filter Section */}
        <section>
          <SearchBox
            value={filterData.searchString}
            setValue={setFilterData}
            jobsData={jobsData}
          />
          <DropdownContainer>
            <SelectBox
              name="department"
              options={departmentOptions}
              isloading={departmentsLoading}
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <SelectBox
              name="location"
              options={locationOptions}
              isloading={locationsLoading}
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <SelectBox
              name="function"
              options={functionOptions}
              isloading={functionsLoading}
              filterData={filterData}
              setFilterData={setFilterData}
            />
          </DropdownContainer>
        </section>
      </TopContainer>
      <TopContainer>
        {/* Show applied filters with a X button to remove the filter */}
        <SelectedFilters
          filterData={filterData}
          onRemove={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />
      </TopContainer>
      {/* Job Listing Section */}
      <BottomContainer>
        {isLoading ? (
          // Loader while data is being fetched
          <Loader />
        ) : (
          <div>
            {/* Render jobs grouped by department */}
            {Object?.values(groupedJobs).map((dept) => (
              <div key={dept.id}>
                <h1>{dept.id && dept.title}</h1>
                {/* Render job cards for each department */}
                {dept.jobs.map((job) => (
                  <JobCard
                    title={job?.title}
                    location={job?.location}
                    id={job?.id}
                    department={dept.id && dept.title}
                    applyUrl={job.applyUrl}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </BottomContainer>
    </MainDiv>
  );
}

export default JobListing;
