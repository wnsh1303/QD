import React, { useState } from 'react';
import styles from './InputField.module.css';

// InputField function component for reusable input fields with focus style change
const InputField = ({ label, placeholder, type = "text", value, onChange  }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Choose the style based on the focus state
  const inputStyle = isFocused ? styles.inputnameCopy2 : styles.inputnameCopy3;

  return (
    <div className={inputStyle}>
      <div className={styles.labelname}>{label}</div>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
