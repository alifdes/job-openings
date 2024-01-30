import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon
} from "react-share";



export function SocialMediaShare() {
  const shareUrl = "http://github.com";
  const title = "GitHub";

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className="Demo__some-network">
        <LinkedinShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <XIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}
