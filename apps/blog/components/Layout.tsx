import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';
import styles from '@styles/Layout.module.sass';

interface LayoutProps {
  pageTitle: string;
  metaContent: string;
  children: React.ReactNode;
  page?: 'home' | 'article';
}

const getLayoutClass = (page) => {
  switch (page) {
    case 'home':
      return styles.homeLayout;
    case 'article':
      return styles.articleLayout;
    default:
      return styles.homeLayout;
  }
};

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  metaContent,
  page = 'home',
  children,
}) => {
  const layoutClass = getLayoutClass(page);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={metaContent} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${layoutClass}`}>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
