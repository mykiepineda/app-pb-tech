import styles from "./Carousel.module.css";
import ButtonPrimary from "../ui/ButtonPrimary";

const Info = ({ header, infoText, buttonText, clickHandler }) => {
  return (
    <div className={styles.info}>
      <h1>{header}</h1>
      <p>{infoText}</p>
      <div className={styles["button-container"]}>
        <ButtonPrimary onClick={clickHandler}>{buttonText}</ButtonPrimary>
      </div>
    </div>
  );
};

const Carousel = ({ data }) => {
  const { header, infoText, image, buttonText, clickHandler } = data;
  return (
    <div className={styles.carousel}>
      <img src={image} />
      <Info
        header={header}
        infoText={infoText}
        buttonText={buttonText}
        clickHandler={clickHandler}
      />
    </div>
  );
};

export default Carousel;
