import styles from "./AppsPages1.module.css";

const AppsPages1 = () => {
  return (
    <div className={styles.appsPages}>
      <div className={styles.list}>
        <img className={styles.smartHomeIcon} alt="" src="/menu/smarthome.svg" />
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.badge}>
          <div className={styles.div}>3</div>
        </div>
        <img
          className={styles.chevronDownIcon}
          alt=""
          src="/menu/chevrondown1.svg"
        />
      </div>
      <div className={styles.list1}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/menu/vector.svg"
          />
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/menu/vector.svg"
          />
          <img
            className={styles.vectorIcon2}
            loading="lazy"
            alt=""
            src="/menu/vector.svg"
          />
        </div>
        <div className={styles.watchlist}>Watchlist</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
      <div className={styles.list2}>
        <div className={styles.transactionIcon}>
          <img className={styles.vectorIcon3} alt="" src="/menu/vector-3.svg" />
          <img
            className={styles.vectorIcon4}
            loading="lazy"
            alt=""
            src="/menu/vector-4.svg"
          />
        </div>
        <div className={styles.transaction}>Transaction</div>
        <img
          className={styles.chevronRightIcon1}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
      <div className={styles.list3}>
        <div className={styles.layer25}>
          <img className={styles.vectorIcon5} alt="" src="/menu/vector-51.svg" />
          <img
            className={styles.vectorIcon6}
            loading="lazy"
            alt=""
            src="/menu/vector-61.svg"
          />
        </div>
        <div className={styles.withdrawl}>Withdrawl</div>
        <img
          className={styles.chevronRightIcon2}
          alt=""
          src="/menu/chevronright.svg"
        />
      </div>
    </div>
  );
};

export default AppsPages1;
