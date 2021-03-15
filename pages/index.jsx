import Head from 'next/head';
import React from 'react';
import Layout from '../component/Layout';
import VideoHero from '../component/VideoHero';
import Number from '../component/NumberVolume/Container';
import GraphVolume from '../component/GraphVolume/Container';
import FillText from '../component/FillText/Container';
import Polio from '../component/Polio/Container';

import { MenuProvider } from '../context/MenuContext';
export default function Home() {
  return (
    <>
      <Head>
        <title>수염난친구들 :메인</title>

        <meta name='description' content='수염난친구들 메인페이지입니다.' />
        <meta name='keywords' content='메인페이지' />

        <meta property='og:title' content='수염난친구들 :메인' />

        <meta property='og:site_name' content='' />
        <meta
          property='og:description'
          content='수염난친구들 메인페이지입니다.'
        />

        <meta name='twitter:title' content='수염난친구들 :메인' />
        <meta
          name='twitter:description'
          content='수염난친구들 메인페이지입니다.'
        />

        <meta name='twitter:card' content='summary' />
      </Head>
      <Layout>
        <VideoHero />
        <Number />
        <GraphVolume />
        <FillText />
        <MenuProvider>
          <Polio />
        </MenuProvider>
      </Layout>
    </>
  );
}
