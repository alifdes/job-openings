import React, { useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding-left: 10px !important;
  padding: 5px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 100%;
  height: 35px;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 20px;
`;

const ClearIcon = styled(BsX)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const AutocompleteList = styled.ul`
  list-style: none;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  z-index: 99;
`;

const AutocompleteListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
function SearchBox({ value, setValue, jobsData }) {
  const handleInputChange = (e) => {
    setValue((prevSelectedOption) => ({
      ...prevSelectedOption,
      searchString: e.target.value,
    }));
  };

  const clearQuery = () => {
    setValue((prevSelectedOption) => ({
      ...prevSelectedOption,
      searchString: "",
    }));
  };
  const filteredJobs = jobsData
    ? jobsData.filter((job) =>
        job.title.toLowerCase().includes(value?.toLowerCase())
      )
    : [];

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for job"
          value={value}
          onChange={handleInputChange}
        />
        {value ? <ClearIcon onClick={clearQuery} /> : <SearchIcon />}
        {value && value.length > 0 && (
          <AutocompleteList>
            {filteredJobs ? (
              filteredJobs.map((job) => (
                <AutocompleteListItem key={job.id}>
                  {job.title}
                </AutocompleteListItem>
              ))
            ) : (
              <AutocompleteListItem key={0}> NO DATA </AutocompleteListItem>
            )}
          </AutocompleteList>
        )}
      </SearchContainer>
    </>
  );
}

export default SearchBox;
