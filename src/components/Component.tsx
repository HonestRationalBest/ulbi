import React from "react";
import * as styles from "./Component.module.scss";

const Component = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, React with SCSS!</h1>
      <button className={styles.button}>Click Me</button>
    </div>
  );
};

export default Component;
