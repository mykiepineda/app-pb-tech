import styles from "./Links.module.css";
import DevicesIcon from "@mui/icons-material/Devices";
import SignUpForNews from "./SignUpForNews";

const LinkGroup = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href={link}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

const ShopByDepartment = () => {
  const LINKS1 = [
    "Computers & Tablets",
    "PC Parts",
    "Printing & Office",
    "TV & AV",
    "Gaming",
    "Smart Home & Security",
    "Others",
  ];
  const LINKS2 = [
    "Peripherals & Accessories",
    "Networking",
    "Phones & Accessories",
    "Headphones & Audio",
    "Cameras & Drones",
    "Toys, Hobbies & STEM",
    "Gift Ideas",
  ];
  return (
    <div className={styles["link-group"]}>
      <h4 className={styles.title}>
        <span>Shop by DEPARTMENT</span>
        <DevicesIcon />
      </h4>
      <div className={styles["shop-by-department"]}>
        <LinkGroup links={LINKS1} />
        <LinkGroup links={LINKS2} />
      </div>
    </div>
  );
};

const Commercial = () => {
  const LINKS = [
    "Business",
    "Education",
    "Wholesale",
    "Government",
    "Health",
    "Additional Services",
  ];
  return (
    <div className={styles["link-group"]}>
      <h4>Commercial</h4>
      <LinkGroup links={LINKS} />
    </div>
  );
};

const SericesAndSupport = () => {
  const LINKS = [
    "About Us",
    "Contact Us",
    "Help",
    "Returns & Warranty",
    "Finance",
    "IT, Home & Repair Services",
  ];
  return (
    <div className={styles["link-group"]}>
      <h4>Services & Support</h4>
      <LinkGroup links={LINKS} />
    </div>
  );
};

const Links = () => {
  return (
    <div className={styles.container}>
      <ShopByDepartment />
      <Commercial />
      <SericesAndSupport />
      <SignUpForNews />
    </div>
  );
};

export default Links;
