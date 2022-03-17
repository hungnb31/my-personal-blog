import React from "react";
import Image from "next/image";

import hogImg from "../../images/showcase-hogwarts.svg";
import styles from "../../styles/containers/Social.module.sass";

const Social = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>50% Off Hogwarts Express tickets</div>
        <div className={styles.image}>
          <Image src={hogImg} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Social;
