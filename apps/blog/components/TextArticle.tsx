import React from 'react';

import styles from '@styles/components/TextArticle.module.sass';

const TextArticle = () => {
  return (
    <section className={styles.container}>
      <article className={styles.wrapper}>
        <h4 className={styles.title}>A pasta menu</h4>
        <p>
          Everybody loves pasta. It&apos;s impossible to not love them, so here
          are 15 recipes, served with GSAP. Note the easter egg — the menu icon
          changes according to the pasta that you choose.
        </p>
      </article>
      <article className={styles.wrapper}>
        <h4 className={styles.title}>Everybody loves pasta</h4>
        <p>
          Everybody loves pasta. It&apos;s impossible to not love them, so here
          are 15 recipes, served with GSAP. Note the easter egg — the menu icon
          changes according to the pasta that you choose.
        </p>
      </article>
    </section>
  );
};

export default TextArticle;
