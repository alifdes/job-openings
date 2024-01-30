import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DetailSectionComponent from "../components/DetailSectionComponent";
import JobCard from "../ui/JobCard";
import { SocialMediaShare } from "../components/SocialMediaShare";
import OtherJoblistComponent from "../components/OtherJoblistComponent";
import { useJob } from "../queries/jobs";

const PageContainer = styled(Container)`
  margin-top: 30px !important;
  margin: 20px;
`;
const BottomContainer = styled.div``;
const SubContainer = styled(Container)`
  padding: 20px;
  margin: 10px 20px;
  background-color: #f0f0f0;
  width: 40%;
`;
const JobDetails = () => {
  const { id } = useParams(); 
  const [data, setJobData] = useState(null);
  const fetchJobs = async () => {
    const response = await fetch("https://demo.jobsoid.com/api/v1/jobs");
    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }
    return response.json();
  };

  const { data: jobsData, isLoading: jobsLoading } = useQuery(
    "jobs",
    fetchJobs
  );
 

  const handleClick = () => {
    window.open(data.applyUrl, "_blank");
  };

  return (
    <Container fluid>
      <p>{data.company}</p>
      <h1>{data.title}</h1>

      <DetailSectionComponent location={data.location} />
      <Button variant="primary" onClick={handleClick}>
        Apply Now
      </Button>
      <BottomContainer>
        <div>
          <span>Lorem ipsum dolor sit amet,</span>
        </div>
        <div>
          <SubContainer>
            <OtherJoblistComponent />
          </SubContainer>
          <SocialMediaShare />
        </div>
      </BottomContainer>
    </Container>
  );
};

export default JobDetails;
