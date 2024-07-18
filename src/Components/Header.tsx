import styles from "./Header.module.css";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
    </header>
  );
}

export default Header;
