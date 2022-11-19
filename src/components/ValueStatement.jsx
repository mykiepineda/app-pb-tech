import styles from "./ValueStatement.module.css";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const LinkWrapper = ({ title, children }) => {
  return (
    <div className={styles["link-wrapper"]}>
      {children}
      <p>{title}</p>
    </div>
  );
};

const ValueStatement = () => {
  return (
    <section className={styles.container}>
      <LinkWrapper title="Secure Payments">
        <PaymentOutlinedIcon />
      </LinkWrapper>
      <LinkWrapper title="Click and collect nationwide">
        <LocationOnOutlinedIcon />
      </LinkWrapper>
      <LinkWrapper title="Fast courier delivery">
        <LocalShippingOutlinedIcon />
      </LinkWrapper>
      <LinkWrapper title="Bulk discounts & leasing available">
        <InfoOutlinedIcon />
      </LinkWrapper>
    </section>
  );
};

export default ValueStatement;
