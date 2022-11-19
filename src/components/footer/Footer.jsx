import styles from "./Footer.module.css";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Links from "./Links";

const SocialMediaIconWrapper = ({ children }) => {
  return <div className={styles["social-media-icon"]}>{children}</div>;
};

const BottomBar = () => {
  return (
    <div className={styles["bottom-bar"]}>
      <div className={styles["left-container"]}>
        <CopyrightOutlinedIcon />
        <h5>PB Technologies Limited</h5>
        <h6>587 Great South Road, Manukau, Auckland, New Zealand</h6>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["social-media-container"]}>
          <SocialMediaIconWrapper>
            <FacebookOutlinedIcon />
          </SocialMediaIconWrapper>
          <SocialMediaIconWrapper>
            <InstagramIcon />
          </SocialMediaIconWrapper>
          <SocialMediaIconWrapper>
            <YouTubeIcon />
          </SocialMediaIconWrapper>
        </div>
        <p>Follow us on social</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Links />
      <BottomBar />
    </footer>
  );
};

export default Footer;
