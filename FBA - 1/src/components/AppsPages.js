import styles from "./AppsPages.module.css";

const AppsPages = () => {
  return (
    <div className={styles.appsPages}>
      <div className={styles.list}>
        <div className={styles.investmentPortfolio}>
          <img className={styles.vectorIcon} alt="" src="/menu/vector-7.svg" />
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/menu/vector-8.svg"
          />
          <img
            className={styles.vectorIcon2}
            loading="lazy"
            alt=""
            src="/menu/vector-9.svg"
          />
          <img
            className={styles.vectorIcon3}
            loading="lazy"
            alt=""
            src="/menu/vector-10.svg"
          />
          <img
            className={styles.vectorIcon4}
            loading="lazy"
            alt=""
            src="/menu/vector-11.svg"
          />
          <img
            className={styles.vectorIcon5}
            loading="lazy"
            alt=""
            src="/menu/vector-12.svg"
          />
        </div>
        <div className={styles.portfolio}>Portfolio</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
      <div className={styles.list1}>
        <img
          className={styles.bellIcon}
          loading="lazy"
          alt=""
          src="/menu/bell.svg"
        />
        <div className={styles.alerts}>Alerts</div>
        <img
          className={styles.chevronRightIcon1}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
      <div className={styles.list2}>
        <img
          className={styles.vectorIcon6}
          loading="lazy"
          alt=""
          src="/menu/vector-13.svg"
        />
        <div className={styles.analytics}>Analytics</div>
        <img
          className={styles.chevronRightIcon2}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
    </div>
  );
};

export default AppsPages;
