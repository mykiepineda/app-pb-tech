import styles from "./AskPhoebeTryOurLaptopFinder.module.css";
import AskPhoebeImage from "../assets/ask-phoebe.png";
import SquaresForegroundVector from "../assets/squares-foreground.svg";
import CircleBackgroundVector from "../assets/circle-background.svg";
import TryOurLaptopFinderImage from "../assets/try-our-laptop-finder.png";

const Card = ({ styleOverride, title, bodyText, buttonText }) => {
  return (
    <div className={`${styles.card} ${styleOverride}`}>
      <h3>{title}</h3>
      <p>{bodyText}</p>
      <button>{buttonText}</button>
    </div>
  );
};

const AskPhoebe = () => {
  return (
    <div className={styles["ap-container"]}>
      <img src={SquaresForegroundVector} className={styles["ap-squares"]}/>
      <img src={AskPhoebeImage} className={styles["ap-phoebe"]}/>
      <Card
        styleOverride={styles.ap}
        title="Ask Phoebe"
        bodyText="Can't find what you're looking for? Get online shopping help from our friendly team!"
        buttonText="Schedule a call"
      />
      <img src={CircleBackgroundVector} className={styles["ap-circle"]}/>
    </div>
  );
};

const TryOurLaptopFinder = () => {
  return (
    <div className={styles["tolf-container"]}>
      <img src={TryOurLaptopFinderImage} />
      <Card
        styleOverride={styles.tolf}
        title="Try our Laptop Finder"
        bodyText="Whether you're after using your laptop for work, school, gaming, or personal use, we can point you to the right direction."
        buttonText="Start your search"
      />
    </div>
  );
};

const AskPhoebeTryOurLaptopFinder = () => {
  return (
    <section className={styles.container}>
      <AskPhoebe />
      <TryOurLaptopFinder />
    </section>
  );
};

export default AskPhoebeTryOurLaptopFinder;
