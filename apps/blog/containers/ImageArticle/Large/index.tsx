import React from "react";
import Image from "next/image";

import styles from "../../../styles/containers/LargeImageArticle.module.sass";
import menuImg from "../../../images/showcase-menu.jpeg";

const LargeImageArticle = () => {
  return (
    <article className={styles.container}>
      <div>
        <h4 className={styles.title}>Let&apos;s adopt, don&apos;t shop.</h4>
        <p className={styles.content}>
          Explore a style guide and various page layouts for a pet adoption site
          in the <em>Style Guide</em> collection. Inspired by the{" "}
          <em>Atomic Design</em> principle, this 8-pen collection includes a 404
          page concept, an admin dashboard and what a Twitter user calls a
          &apos;media card zen garden&apos;. Each pen comes with five (yes,
          five) color themes, including the precious dark mode.
        </p>
      </div>
      <figure className={styles.image}>
        <Image src={menuImg} alt="menu image" />
        <figcaption>See the new and improved menu for Toasty!</figcaption>
      </figure>
    </article>
  );
};

export default LargeImageArticle;
