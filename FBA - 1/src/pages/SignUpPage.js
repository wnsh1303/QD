import FrameComponent from "../components/SignUpComponent";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signUpPage}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <h3 className={styles.fbaQuant}>FBA Quant</h3>
      </div>
      <section className={styles.signUpPageInner}>
        <div className={styles.frameWrapper}>
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
