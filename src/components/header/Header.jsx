import styles from "./Header.module.css";
import logo from "../../assets/pb-logo-alt.svg";
import Navbar from "./Navbar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const SEARCH_ICON = { color: "#ff7e27" };
const OTHER_ICONS = { color: "#ffffff", fontSize: "35px" };

const IconButton = ({ children }) => {
  return <button className={styles["icon-button"]}>{children}</button>;
};

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles["search-container"]}>
        <button className={styles["search-button"]}>
          <SearchIcon style={SEARCH_ICON} />
        </button>
        <input type="text" placeholder="Search" />
      </div>
      <IconButton>
        <PersonOutlinedIcon style={OTHER_ICONS} />
      </IconButton>
      <IconButton>
        <FavoriteBorderOutlinedIcon style={OTHER_ICONS} />
      </IconButton>
      <IconButton>
        <ShoppingCartOutlinedIcon style={OTHER_ICONS} />
      </IconButton>
    </div>
  );
};

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles["top-container"]}>
        <img src={logo} alt="PB Tech Logo" />
        <Search />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Top />
      <Navbar />
    </header>
  );
};

export default Header;
