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
  //variables
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
  useEffect(() => {
    localStorage.setItem("filterData", JSON.stringify(filterData));
  }, [filterData]);

  useEffect(() => {
    refetch();
  }, [filterData, refetch]);

  /// need to remove function
  const createDummyJobs = (departments) => {
    let dummyJobs = [];
    departments?.forEach((dept) => {
      const isNullDepartment = Math.random() < 0.3; // Adjust probability as needed
      for (let i = 0; i < 3; i++) {
        const department = isNullDepartment ? null : dept;
        const dummyJob = {
          id: Math.floor(Math.random() * 100000), // Dummy ID generation
          title: `Dummy Job for ${
            department ? department.title : "Unknown Department"
          } ${i + 1}`,
          department: department,
        };
        dummyJobs.push(dummyJob);
      }
    });
    return dummyJobs;
  };

  //group job depending on dept
  const dummyJobs = createDummyJobs(departments);
  //change to 
  const groupedJobs = jobsData?.reduce((acc, job) => {
    const { department } = job;
    const deptId = department ? department.id : null;
    const deptTitle = department ? department.title : "Unknown Department";
    if (!acc[deptId]) {
      acc[deptId] = { id: deptId, title: deptTitle, jobs: [] };
    }
    acc[deptId].jobs.push(job);
    return acc;
  }, {});

  // dropdown options
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

  const handleRemoveFilter = (filterKey) => {
    setFilterData((prevSelectedOption) => ({
      ...prevSelectedOption,
      [filterKey]: {},
    }));
  };
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
        <SelectedFilters
          filterData={filterData}
          onRemove={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />
      </TopContainer>
      <BottomContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {Object?.values(groupedJobs).map((dept) => (
              <div key={dept.id}>
                <h1>{dept.id && dept.title}</h1>
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
