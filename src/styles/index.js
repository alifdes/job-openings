import styled from "styled-components";
import { Container as BsContainer } from "react-bootstrap";

export const TopContainer = styled(BsContainer)`
  padding: 20px;
  margin: 10px 20px;
  background-color: #f0f0f0;
`;
export const BottomContainer = styled(BsContainer)`
  padding: 20px;
  margin: 10px 20px;
`;
export const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #2c2d38;
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const HorizontalLine = styled.div`
  width: 20%;
  height: 0.5em;
  background-color: #6295e3;
  margin-bottom: 20px;
`;