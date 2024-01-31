import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailSectionComponent from "../components/DetailSectionComponent";
import { SocialMediaShare } from "../components/SocialMediaShare";
import OtherJoblistComponent from "../components/OtherJoblistComponent";
import { useJob } from "../queries/jobs";
import {
  MainDiv,
} from "../styles";
import { Button } from "../ui/Buttons";

const TopContainer = styled(Container)`
      margin-top: 20px!important;
    margin: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #dbdeeb;

`;
const BottomContainer = styled(Container)`
    margin: 20px;
    padding: 20px;
    display:flex;
`;
const SubContainer = styled(Container)`
  padding: 20px;
  margin: 10px 20px;
  background-color: #f0f0f0;

  `;
  const CompanyTitle = styled.span`
font-size: 18px;
    font-weight: bolder;
`;
const JobTitle = styled.h1`
    font-size: 24px;
    font-weight: bolder;
`;
const RightPanel = styled.div`
width:500px;
`;
const LeftPanel = styled.div`
width:100%;
`;
const JobDetails = () => {
  const { id } = useParams();
  const { data: jobData, isLoading } = useJob(id);
  console.log(jobData);

  const handleClick = () => {
    window.open(jobData.applyUrl, "_blank");
  };

  return (
    <MainDiv>
        {isLoading ? (
          <div> Loading...</div>
        ) : (
          <>
          <TopContainer>
            <CompanyTitle>
              {jobData.department && (
                <>
                  {jobData.department.title}
                  {" for "}
                </>
              )}
              {jobData.company}
            </CompanyTitle>
            <JobTitle>{jobData.title}</JobTitle>
            <DetailSectionComponent location={jobData.location} />
            <Button background="#6297e5" width="200px" onClick={handleClick} style={{ marginTop: "20px" }}>
              Apply Now
            </Button>
            </TopContainer>

            <BottomContainer >
              <LeftPanel>
                <span>{jobData.description.replace(/<[^>]+>/g, '')}</span>
              </LeftPanel>
              <RightPanel>
                <SubContainer>
                  <OtherJoblistComponent />
                </SubContainer>
                <SocialMediaShare />
              </RightPanel>
            </BottomContainer>
            </>
        )}
     
    </MainDiv>
  );
};

export default JobDetails;
