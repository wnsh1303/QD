import FrameComponent from "../components/LoginComponent";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <h3 className={styles.fbaQuant}>FBA Quant</h3>
      </div>
      <section className={styles.loginPageInner}>
        <div className={styles.frameWrapper}>
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
