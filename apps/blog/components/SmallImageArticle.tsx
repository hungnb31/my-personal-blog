import React from 'react';

import img from '@images/showcase-toggle.gif';
import styles from '@styles/components/SmallImageArticle.module.sass';
import Image from '@components/Image';

const SmallImageArticle = () => {
  return (
    <article className={styles.container}>
      <div className={styles.image}>
        <Image placeholder="empty" src={img} alt="toggle image" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>Toggles</h4>
        <p>
          Eight playful toggles to toggle on and off for your amusement. Is it
          possible to use these on your site? No. But there&apos;s a really cute
          dog one you <em>have </em>to see...
        </p>
      </div>
    </article>
  );
};

export default SmallImageArticle;
