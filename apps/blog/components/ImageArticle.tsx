import Link from 'next/link';
import React from 'react';

import styles from '@styles/components/ImageArticle.module.sass';
import floorplanImg from '@images/showcase-floorplan.jpg';
import Image from '@components/Image';

const ImageArticle = () => {
  return (
    <article className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src={floorplanImg} alt="image" />{' '}
          </div>
          <h4 className={styles.title}>
            Can you get inspired to make your own floor plans?
          </h4>
          <div>
            <p className={styles.text}>
              Making a floor Plan with CSS Grid? Talk about using the wrong tool
              for the job. But I guess this is what happens when someone
              isn&apos;t happy with any of the floor plans found on Pinterest;
              she&apos;ll start making her own for the eventual home that she
              will never own. Nevertheless, there&apos;s a home office with a
              large window to look out of pensively during rainy days and a ton
              of &quot;white space&quot; for the cats to run around.
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ImageArticle;
