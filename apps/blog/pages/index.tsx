import type { NextPage } from 'next';
import HeadArticle from '@components/HeadArticle';
import ImageArticle from '@components/ImageArticle';
import LargeImageArticle from '@components/LargeImageArticle';
import SmallImageArticle from '@components/SmallImageArticle';
import Series from '@components/Series';
import Sidebar from '@components/Sidebar';
import Social from '@components/Social';
import TextArticle from '@components/TextArticle';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Howard Blog" metaContent="Blog of Howard">
      <HeadArticle />
      <ImageArticle />
      <Social />
      <TextArticle />
      <LargeImageArticle />
      <SmallImageArticle />
      <Sidebar />
      <Series />
    </Layout>
  );
};

export default Home;
