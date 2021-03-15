import React from 'react';
import Layout from '../component/Layout';
import PageHeader from '../component/PageHeader/Container';
import PhotoCont from '../container/Photo';
import Head from 'next/head';
import { ImageProvider } from '../context/ImageContext';
const Photo = () => {
  return (
    <>
      <Head>
        <title>수염난친구들 : 사진</title>

        <meta name='description' content='수염난친구들 사진찾는곳입니다.' />
        <meta name='keywords' content='사진찾는곳' />

        <meta property='og:title' content='수염난친구들 :메인' />

        <meta property='og:site_name' content='' />
        <meta
          property='og:description'
          content='수염난친구들 사진찾는곳입니다.'
        />

        <meta name='twitter:title' content='수염난친구들 :메인' />
        <meta
          name='twitter:description'
          content='수염난친구들 사진찾는곳입니다.'
        />

        <meta name='twitter:card' content='summary' />
      </Head>
      <ImageProvider>
        <Layout>
          <PhotoCont />
        </Layout>
      </ImageProvider>
    </>
  );
};

export default Photo;
