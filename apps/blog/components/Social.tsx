import React from 'react';

import img from '@images/showcase-hogwarts.svg';
import styles from '@styles/components/Social.module.sass';
import Image from './Image';

const Social = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>50% Off Hogwarts Express tickets</div>
        <div className={styles.image}>
          <Image src={img} placeholder="empty" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Social;
