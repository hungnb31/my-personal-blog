import Link from 'next/link';
import React from 'react';

import styles from '@styles/components/Sidebar.module.sass';

const categories = [
  '#React',
  '#Animation',
  '#CSS',
  '#Next',
  '#Gatsby',
  '#Performance',
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.cates}>
        <div className={styles.title}>Top categories</div>
        <div className={styles.cate_wrap}>
          {categories.map((item) => (
            <div key={item} className={styles.cate}>
              <div>{item} </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className={styles.title}>Most viewed posts</div>
        <div className={styles.random_wrap}>
          <Link href="/" passHref>
            <a className={styles.post_detail}>
              <h5 className={styles.post_title}>
                Frustrated designer runs amok with Captcha ideas
              </h5>
              <p>
                From Tic Tac Toe to solving meme-based questions, this is a
                different take on how web captchas should be. &quot;I have not
                successfully picked out all photos of a truck on the first try.
                Something&apos;s gotta change,&quot; says the designer, who has
                requested to remain anonymous.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.post_detail}>
              <h5 className={styles.post_title}>
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.post_detail}>
              <h5 className={styles.post_title}>
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.post_detail}>
              <h5 className={styles.post_title}>
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
