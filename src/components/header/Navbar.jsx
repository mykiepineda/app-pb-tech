import styles from "./Navbar.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const LINKS = ["Departments", "Brands", "Services", "PB Business"];

const Link = ({ link }) => {
  return (
    <li key={link} className={styles["link-container"]}>
      <div>{link}</div>
      <KeyboardArrowDownOutlinedIcon />
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {LINKS.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
