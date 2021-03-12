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
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='naver-site-verification'
          content='9d49a02a757cc3134f21a2242219cb37d0471427'
        />
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
