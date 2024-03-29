import React from "react";
import { styled } from "styled-components";
import { BsX } from "react-icons/bs";

const MainContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledValue = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #f0f0f0;
`;
const StyledDiv = styled.div`
  display: flex;
  background-color: white;
  padding: 5px;
  align-items: center;
  gap: 2px;
`;
const ClearIcon = styled(BsX)`
  font-size: 20px;
  cursor: pointer;
`;
const ClearAllText = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SelectedFilters = ({ filterData, onRemove, onClearAll }) => {
  // Filter entries with null values
  const FilterValues = Object.entries(filterData).filter(
    ([key, value]) => value !== null
  );
  return (
    <MainContainer>
      {/* Container for selected filter values */}
      <StyledValue>
        {/* map through filter values and render selected filters */}
        {FilterValues.map(
          ([filterName, value], index) =>
            value.label && (
              <StyledDiv key={index}>
                <span>{value.label}</span>
                <ClearIcon onClick={() => onRemove(filterName)} />{" "}
                {/* Close icon to remove filter */}
              </StyledDiv>
            )
        )}
      </StyledValue>
      <div>
        {/*  "Clear All" button to remove  all selected filter*/}
        {FilterValues.length > 0 && (
          <ClearAllText onClick={onClearAll}>Clear All</ClearAllText>
        )}
      </div>
    </MainContainer>
  );
};

export default SelectedFilters;
