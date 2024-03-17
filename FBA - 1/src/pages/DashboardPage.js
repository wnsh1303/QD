import AppsPages1 from "../components/AppsPages1";
import AppsPages from "../components/AppsPages";
import styles from "./DashboardPage.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.dashboardPage}>
      <div className={styles.menu}>
        <div className={styles.menu1}>
          <div className={styles.logo}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/menu/logo1.svg"
            />
            <h3 className={styles.fbaQuant}>FBA Quant</h3>
          </div>
          <div className={styles.section}>
            <div className={styles.mainMenu}>MAIN MENU</div>
          </div>
          <AppsPages1 />
          <div className={styles.section1}>
            <div className={styles.todo}>TODO</div>
          </div>
          <AppsPages />
          <div className={styles.section2}>
            <div className={styles.settings}>SETTINGS</div>
          </div>
          <div className={styles.components}>
            <div className={styles.list}>
              <img
                className={styles.userCircleIcon}
                loading="lazy"
                alt=""
                src="/menu/usercircle.svg"
              />
              <div className={styles.manageAccount}>Manage Account</div>
              <div className={styles.badge}>
                <div className={styles.div}>4</div>
              </div>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/menu/chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
