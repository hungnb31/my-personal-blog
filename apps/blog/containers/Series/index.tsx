import Image from 'next/image';
import React from 'react';

import showcaseGridImg from '@images/showcase-grid.png';
import styles from '@styles/containers/Series.module.sass';

const Series = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image alt="something" src={showcaseGridImg} />
      </div>
      <div className={styles.content}>
        <div className={styles.articles}>
          <article className={styles.article}>
            <h4 className={styles.title}>This is the React post</h4>
            <p>
              Get your fill of more CSS Grid items in this collection. There are
              a total of 32 pens to date... well, 33, if you count this one too.
              What can you expect in this collection? The hidden gems
            </p>
          </article>
          <article className={styles.article}>
            <h4 className={styles.title}>This is the React post</h4>
            <p>
              Get your fill of more CSS Grid items in this collection. There are
              a total of 32 pens to date... well, 33, if you count this one too.
              What can you expect in this collection? The hidden gems
            </p>
          </article>
          <article className={styles.article}>
            <h4 className={styles.title}>This is the React post</h4>
            <p>
              Get your fill of more CSS Grid items in this collection. There are
              a total of 32 pens to date... well, 33, if you count this one too.
              What can you expect in this collection? The hidden gems
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Series;
