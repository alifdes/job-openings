import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import DetailSectionComponent from "../components/DetailSectionComponent";
import { Button } from "./Buttons";
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  margin-bottom: 30px;
`;

const StyledTitle = styled(Card.Title)`
  font-size: 18px;
  font-weight: bolder;
`;

const StyledBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
const JobCard = ({
  title,
  location,
  department,
  applyUrl,
  id,
  show = true,
}) => {
  const handleClick = () => {
    window.open(applyUrl, "_blank");
  };
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledBody>
        <DetailSectionComponent
          location={location}
          department={department ? department : ""}
          show={show}
        />
        {show && (
          <ButtonSection>
            <Button
              color="#6297e5"
              border="1px solid #6297e5"
              onClick={handleClick}
            >
              Apply
            </Button>
            <Button color="#838787">
              {" "}
              <Link to={`/jobs/${id}`}>View</Link>
            </Button>
          </ButtonSection>
        )}
      </StyledBody>
    </StyledCard>
  );
};

export default JobCard;
