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

`;
const FullTimeText = styled.span`
 background: grey;
    padding: 5px 10px;

`;


const DetailSectionComponent = ({  location,department }) => {

  return (

        <DetailSection>
         {department && <span><FaBuilding/> {department}</span>}
        {location &&  <span>
          <IoLocationSharp/>
            {location?.title}
            {location?.city}, {location?.state}, {location?.country}
          </span>}

          <FullTimeText>Full Time</FullTimeText>
        </DetailSection>


  );
};

export default DetailSectionComponent;
