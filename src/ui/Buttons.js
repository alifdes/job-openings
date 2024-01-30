import styled, { css } from "styled-components";

const baseStyles = css`
  color: ${(props) => props.textColor || "#FFFFFF"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  text-align: center;
  margin: 0px 5px;
  font-family: Montserrat Alternates-Bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: none;
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  ${baseStyles}
  width:auto;
  padding: 10px 20px;
  background:${(props) =>
    props.background ||
    "transparent linear-gradient(270deg, #33c2df 0%, #0081c5 100%)"};
`;

export const BasicButton = styled.button`
  ${baseStyles}
  background:${(props) =>
    props.background ||
    "transparent linear-gradient(270deg, #33c2df 0%, #0081c5 100%)"};
`;
