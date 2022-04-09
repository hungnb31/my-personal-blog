import Image from 'next/image';
import React from 'react';

import showcaseGridImg from '@images/showcase-grid.png';
import styles from '@styles/components/Series.module.sass';

const Series = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image alt="something" src={showcaseGridImg} />
      </div>
      <article className={styles.article}>
        <h4 className={styles.title}>This is the React post</h4>
        <p className={styles.text}>
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
      <article className={styles.article}>
        <h4 className={styles.title}>This is the React post</h4>
        <p className={styles.text}>
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
      <article className={styles.article}>
        <h4 className={styles.title}>This is the React post</h4>
        <p className={styles.text}>
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
    </div>
  );
};

export default Series;
