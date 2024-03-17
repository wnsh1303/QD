import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import styles from "./LoginSignUpComponent.module.css";
import InputField from "./InputField";


const FrameComponent = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [formData, setFormData] = useState({
    emailAddress: '',
    password: '',
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지
    console.log("Submitted form data:", formData); // 폼 데이터 콘솔에 출력
  };

  const onTermsText1Click = useCallback(() => {
    // Sync "Template 5/Sign Up" to the project
  }, []);

  return (
    <div className={styles.startYour14DayFreeTrialParent}>
      <b className={styles.startYour14Day}>Log in to FBA Quant</b>
      <div
        className={styles.alreadyAMember}
      >{`Quick & Simple way to Automate your investment`}</div>
      <form className={styles.frameParent} onSubmit={handleSubmit}>
        <div className={styles.frame}>
          <InputField 
            label="EMAIL ADDRESS" 
            placeholder="johndoe@example.com"
            value={formData.emailAddress}
            onChange={handleChange('emailAddress')} 
          />
          <InputField 
            label="PASSWORD" 
            placeholder="**********" 
            type="password"
            value={formData.password}
            onChange={handleChange('password')} 
          />
        </div>
        <div className={styles.checkboxlabel}>
          <input
            className={styles.checkbox}
            checked={checkboxChecked}
            type="checkbox"
            onChange={(event) => setCheckboxChecked(event.target.checked)}
          />
          <div className={styles.terms}>Remember Me</div>
        </div>
        <button className={styles.btnPrytemplate2} type="submit">
          <div className={styles.createAnAccount}>PROCEED</div>
        </button>
      </form>
      <div className={styles.orUse}>OR</div>
      <Link to="/" className={styles.terms1}>
        No account yet? Register now
      </Link>
    </div>
  );
};

export default FrameComponent;
