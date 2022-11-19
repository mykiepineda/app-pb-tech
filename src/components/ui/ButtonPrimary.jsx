import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className={styles["button-primary"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
