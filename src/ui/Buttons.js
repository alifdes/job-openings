import styled, { css } from "styled-components";

const baseStyles = css`
  color: ${(props) => props.color || "#FFFFFF"} !important;
  width: ${(props) => props.width || "100px"};
  background: ${(props) => props.background || "none"};
  border: ${(props) => props.border || "none"} !important;
  font-size: 12px;
  height: 40px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  border-radius: 5px;
  outline: none;
  border: none;
  border-radius: 100px;
  box-shadow: none;
  padding: 10px 20px;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    color:${(props) => props.textColor || "black"};
    text-decoration: none;
  }
`;

export const Button = styled.button`
  ${baseStyles}
  width:{props.width };
  background: {props.background };
  color: {props.color };
  border: { props.border };
`;
