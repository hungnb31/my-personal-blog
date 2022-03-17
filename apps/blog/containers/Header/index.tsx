import React from "react";
import styles from "../../styles/containers/Header.module.sass";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Howard&apos;s Blog</h1>
        <div className={styles.wrap}>
          <div className={styles.sub}>
            <div>Issue #1 </div>
            <div>Tuesday, 26 May, 2020</div>
            <div>Two memes Edition</div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

