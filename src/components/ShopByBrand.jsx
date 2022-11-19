import styles from "./ShopByBrand.module.css";
import DellLogo from "../assets/brand-dell.png";
import AppleLogo from "../assets/brand-apple.png";
import LenovoLogo from "../assets/brand-lenovo.png";
import MicrosoftLogo from "../assets/brand-microsoft.png";
import AsusLogo from "../assets/brand-asus.png";
import HpLogo from "../assets/brand-hp.png";
import AcerLogo from "../assets/brand-acer.png";

const Card = ({ image, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles["image-container"]}>
        <img src={image} />
      </div>
      <h3>{text}</h3>
    </div>
  );
};

const ShopByBrand = () => {
  return (
    <section className={styles.container}>
      <h1>Shop by Brand</h1>
      <div className={styles.cards}>
        <Card image={DellLogo} text="Dell" />
        <Card image={AppleLogo} text="Apple" />
        <Card image={LenovoLogo} text="Lenovo" />
        <Card image={MicrosoftLogo} text="Microsoft" />
        <Card image={AsusLogo} text="Asus" />
        <Card image={HpLogo} text="HP" />
        <Card image={AcerLogo} text="Acer" />
      </div>
    </section>
  );
};

export default ShopByBrand;
