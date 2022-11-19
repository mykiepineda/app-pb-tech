import styles from "./SignUpForNews.module.css";
import PbInsiderBadge from "../../assets/pb-insider.png";

const SignUpForNews = () => {
  return (
    <div className={styles.container}>
      <img src={PbInsiderBadge} />
      <h4>Sign up for news</h4>
      <p>
        Get early access to sales,
        <br />
        exclusive discount coupons & more!
      </p>
      <input type="email" placeholder="Your e-mail address" />
      <button>Sign up for newsletter</button>
      <span>
        <input type="checkbox" />
        <p>I accept the terms & conditions.</p>
      </span>
    </div>
  );
};

export default SignUpForNews;
