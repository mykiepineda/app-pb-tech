import styles from "./ShopByLaptopType.module.css";
import ButtonPrimary from "./ui/ButtonPrimary";
import OfficeLaptopsCardForegroundImage from "../assets/office-laptops-card-foreground.png";
import GamingLaptopsCardBackgroundImage from "../assets/gaming-laptops-card-background.png";
import ThinLightLaptopsCardBackgroundImage from "../assets/thin-light-laptops-card-background.png";

const ImageTextCard = ({ image, text }) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles["image-container"]}>
          <img src={image} />
        </div>
      )}
      <div className={styles["text-container"]}>{text}</div>
    </div>
  );
};

const Quadrant1 = () => {
  return (
    <div className={styles.quadrant1}>
      <div className={styles["text-container"]}>
        <h2>OFFICE LAPTOPS</h2>
        <div>
          <p>Engineered to transform the modern workplace</p>
        </div>
      </div>
      <div className={styles["image-container"]}>
        <img src={OfficeLaptopsCardForegroundImage} />
      </div>
      <div className={styles["button-container"]}>
        <ButtonPrimary>Business Laptops</ButtonPrimary>
      </div>
    </div>
  );
};

const Quadrant2 = () => {
  return (
    <div className={styles.quadrant2}>
      <div className={styles["top-container"]}>
        <div className={styles["button-container"]}>
          <ButtonPrimary>Home & Study Laptops</ButtonPrimary>
        </div>
      </div>
      <div className={styles["bottom-container"]}>
        <ImageTextCard
          image={GamingLaptopsCardBackgroundImage}
          text="Gaming Laptops"
        />
        <ImageTextCard
          image={ThinLightLaptopsCardBackgroundImage}
          text="Thin & Light Laptops"
        />
      </div>
    </div>
  );
};

const Quadrant34 = () => {
  return (
    <div className={styles.quadrant34}>
      <ImageTextCard text="2-in-1 Flip Laptops" />
      <ImageTextCard text="Chromebooks" />
      <ImageTextCard text="Mobile Workstations" />
      <ImageTextCard text="Off-Lease Laptops" />
    </div>
  );
};

const ShopByLaptopType = () => {
  return (
    <section className={styles.container}>
      <h1>Shop by Laptop Type</h1>
      <div className={styles.quadrants}>
        <div className={styles["upper-quadrants"]}>
          <Quadrant1 />
          <Quadrant2 />
        </div>
        <div className={styles["lower-quadrants"]}>
          <Quadrant34 />
        </div>
      </div>
    </section>
  );
};

export default ShopByLaptopType;
