import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const StyledLoader = styled.div`
  .spinner-border {
    font-weight: 500;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    left: 50%;
    right: 50%;
    position: absolute;
    top: 50%;
    bottom: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 50000;
  }
`;

export default function Loader({ ...props }) {
  return (
    <StyledLoader>
      <Spinner animation="border">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </StyledLoader>
  );
}
