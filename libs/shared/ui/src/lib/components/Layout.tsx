import Head from 'next/head';

import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  pageTitle: string;
  metaContent: string;
  children: React.ReactNode;
  page?: 'home' | 'article';
}

const getLayoutClass = (page: 'home' | 'article') => {
  switch (page) {
    case 'home':
      return 'sm:grid-rows-[repeat(5,_auto)]';
    case 'article':
      return 'sm:grid-rows-none sm:auto-rows-max';
    default:
      return 'sm:grid-rows-[repeat(5,_auto)]';
  }
};

export const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  metaContent,
  page = 'home',
  children,
}) => {
  const layoutClass = getLayoutClass(page);
  return (
    // background should goes into tag below
    <div className="text-defaultColor text-lg py-12 px-8">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-screen max-w-screen-xl m-auto sm:grid sm:grid-cols-4 sm:grid-rows-[repeat(5,_auto)] sm:gap-3 lg:gap-5 lg:grid-cols-5 ${layoutClass}`}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};
