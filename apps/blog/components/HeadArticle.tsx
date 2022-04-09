import React from 'react';
import Link from 'next/link';

import styles from '@styles/components/HeadArticle.module.sass';
import articleImage from '@images/showcase-terrarium.jpeg';
import Image from './Image';

const HeadArticle = () => {
  return (
    <article className={styles.container}>
      <div className={styles.hashtag}>
        <Link href="/">
          <a>#react</a>
        </Link>
        <Link href="/">
          <a>#next</a>
        </Link>
        <Link href="/">
          <a>#graphql</a>
        </Link>
      </div>
      <h2 className={styles.title}>
        Woman spends too much time on Codepens despite advice; no plans to stop
      </h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Sometimes, Internet users land themselves in an uncommon situation
            where an app or website can be used for both work and personal
            situations. Well, a young front-end designer was spending up to 13
            hours on the site, Codepen for work and her hobby, which
            unfortunately, is also coding. <br />
            The designer, whose work includes a <em>To-Do Terrarium</em>,
            clarified, &quot;Well, I didn&apos;t <em> have </em>to use it for
            work but it was already part of my workflow. It just made sense as
            it was more efficient.&quot; The biggest issue, she said, is that
            she would hop on Codepen for work, but would get distracted by pens
            made by others in the community for unexpectedly long periods of
            time, which then causes her to spend even more time on the site.{' '}
            <br />
            &quot;I mean, that&apos;s terrible right?&quot; she asked. Codepen,
            which brands itself as the best place to build, test, and discover
            front-end code, has declined to comment at this time.
          </p>
        </div>
        <figure className={styles.image}>
          <Image src={articleImage} layout="responsive" alt="article-name" />
        </figure>
      </div>
    </article>
  );
};

export default HeadArticle;
