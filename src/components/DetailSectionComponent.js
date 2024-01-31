import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";

const DetailSection = styled(Card.Text)`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  color: #46536f;
  font-size: ${({ show }) => (show ? "15px" : "11px")};
`;
const FullTimeText = styled.span`
  background: #d3d7e7;
  padding: 5px 10px;
  font-weight: bolder;
  color: #5d6270 !important;
`;

const DetailSectionComponent = ({ location, department, show = true }) => {
  return (
    <DetailSection show={show}>
      {department && (
        <span>
          <FaBuilding /> {department}
        </span>
      )}
      {location && (
        <span>
          <IoLocationSharp />
          {location?.state ? location?.state : location?.city},{" "}
          {location?.country}
        </span>
      )}
      {show && <FullTimeText>Full Time</FullTimeText>}
    </DetailSection>
  );
};

export default DetailSectionComponent;
