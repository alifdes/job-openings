import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";


const ClearIndicator = ({ clearValue, ...props }) => {
  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.value && <div onClick={clearValue}></div>}
    </components.DropdownIndicator>
  );
};
const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "270px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black",
    transform: "rotate(-90deg)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const SelectBox = ({ name, options, isloading, filterData, setFilterData }) => {

  const handleChange = (selectedOption) => {
    setFilterData((prevSelectedOption) => ({
      ...prevSelectedOption,
      [name]: selectedOption,
    }));
  };
  return (
    <Select
      value={ JSON.stringify(filterData[name]) === '{}' ? null : filterData[name] }
      options={options}
      onChange={handleChange}
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      styles={customStyles}
      isSearchable={true}
      isLoading={isloading}
      components={{ DropdownIndicator: ClearIndicator }}
      isClearable
    />
  );
};

export default SelectBox;
