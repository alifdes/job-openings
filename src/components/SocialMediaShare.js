import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HorizontalLine } from "../styles";

const CircleIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const ShareContainer = styled.div`
  padding: 20px;
  margin: 10px 20px;
`;
export function SocialMediaShare() {
  const shareUrl = window.location.href;
  const title = "Job share";

  console.log(shareUrl);
  return (
    <ShareContainer>
      <h1> SHARE JOB OPENINGS</h1>
      <HorizontalLine />
      <Buttons>
        <div>
          <FacebookShareButton url={shareUrl}>
            <CircleIcon>
              <FaFacebookSquare size={24} color="black" />
            </CircleIcon>
          </FacebookShareButton>
        </div>
        <div>
          <LinkedinShareButton url={shareUrl}>
            <CircleIcon>
              <FaLinkedin size={24} color="black" />
            </CircleIcon>{" "}
          </LinkedinShareButton>
        </div>
        <div>
          <TwitterShareButton url={shareUrl} title={title}>
            <CircleIcon>
              <FaTwitter size={24} color="black" />
            </CircleIcon>
          </TwitterShareButton>
        </div>
      </Buttons>
    </ShareContainer>
  );
}
