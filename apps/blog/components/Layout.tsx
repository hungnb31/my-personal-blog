import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';
import styles from '@styles/Layout.module.sass';

interface LayoutProps {
  pageTitle: string;
  metaContent: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  metaContent,
  children,
}) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={metaContent} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
