import React from 'react';
import Layout from '../component/Layout';
import PageHeader from '../component/PageHeader/Container';
import PhotoCont from '../container/Photo';
import Head from 'next/head';
const Photo = () => {
  return (
    <>
      <Head>
        <title>수염난친구들 : 사진</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <PhotoCont />
      </Layout>
    </>
  );
};

export default Photo;
