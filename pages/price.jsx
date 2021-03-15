import React from 'react';
import Head from 'next/head';
import { usePriceContext } from '../context/PriceContext';
import { breakDown } from '../global/Theme';
import Layout from '../component/Layout';
import styled from 'styled-components';
import PriceContainer from '../component/PriceBox/Container';
import { CustomSwitch } from '../component/Input/Switch';
import CustomRadio from '../component/Input/Radio';
import CustomizedSlider from '../component/Input/slider';
import PageHeader from '../component/PageHeader/Container';

const Price = () => {
  const { domain, domainChange } = usePriceContext();
  const { server, serverChange } = usePriceContext();
  const { consult } = usePriceContext();
  const { designChange, design } = usePriceContext();
  const { photo, photoChange, price } = usePriceContext();
  const { insure, insureChange } = usePriceContext();
  return (
    <Layout>
      <Head>
        <title>수염난친구들 : 가격정책</title>

        <meta name='description' content='수염난친구들 가격정책입니다..' />
        <meta name='keywords' content='가격정책' />

        <meta property='og:title' content='수염난친구들 :가격정책' />

        <meta property='og:site_name' content='' />
        <meta
          property='og:description'
          content='수염난친구들 가격정책입니다..'
        />

        <meta name='twitter:title' content='수염난친구들 :가격정책' />
        <meta
          name='twitter:description'
          content='수염난친구들 가격정책입니다..'
        />

        <meta name='twitter:card' content='summary' />
      </Head>
      <PageHeader
        first='가격정책'
        second='저렴하게'
        third='꼭 필요한 기능만 추가하세요.'
        img='/kkaci.jpg'
        theme='price'
      />
      <Background>
        <Innerbox>
          <PriceContainer
            isGray
            title={domain.title}
            controller={
              <CustomSwitch checked={domain.bol} onChange={domainChange} />
            }
            info={domain.info}
            price={new Intl.NumberFormat().format(domain.price)}
          />
          <PriceContainer
            title={server.mainTitle}
            controller={
              <>
                <CustomRadio
                  value={server.title}
                  label='고양이서버'
                  checked={server.bol === false}
                  onChange={serverChange}
                />
                <CustomRadio
                  value={server.title}
                  label='강아지서버'
                  checked={server.bol === true}
                  onChange={serverChange}
                />
              </>
            }
            info={server.info}
            price={new Intl.NumberFormat().format(server.price)}
            large
          />
          <PriceContainer
            isGray
            title={consult.title}
            controller={<CustomSwitch checkd={consult.bol} disabled checked />}
            info={consult.info}
            price={new Intl.NumberFormat().format(consult.price)}
          />
          <PriceContainer
            title={design.title}
            controller={
              <CustomizedSlider onChange={designChange} value={design.val} />
            }
            info={design.info}
            price={new Intl.NumberFormat().format(design.price)}
          />
          <PriceContainer
            isGray
            title={photo.mainTitle}
            controller={
              <>
                <CustomRadio
                  value={photo.title}
                  label='수염난친구'
                  checked={photo.bol === false}
                  onChange={photoChange}
                />
                <CustomRadio
                  value={photo.title}
                  label='전문가'
                  checked={photo.bol === true}
                  onChange={photoChange}
                />
              </>
            }
            info={photo.info}
            price={new Intl.NumberFormat().format(photo.price)}
          />
          <PriceContainer
            title={insure.title}
            controller={
              <CustomSwitch checked={insure.bol} onChange={insureChange} />
            }
            info={insure.info}
            price={new Intl.NumberFormat().format(insure.price)}
          />
          <div style={{ background: 'red', color: 'white' }}>
            🚧공사중🚧 total:{new Intl.NumberFormat().format(price)}원
          </div>
        </Innerbox>
      </Background>
    </Layout>
  );
};

export default Price;

const Background = styled.section`
  background: #003d8d;
  width: 100%;
  min-height: 130vh;
  padding: 10vh calc(100% - 80vw);
  ${breakDown.desktop({ padding: 0, minHeight: '600vh' })};
`;

const Innerbox = styled.div`
  background: white;
  height: 120vh;
  width: 100%;
  border-radius: 50px;
  ${breakDown.desktop({ background: 'none' })}
  flex-direction: column;
  padding: 50px 50px;
  white-space: pre-line;
  vertical-align: bottom;

  ${breakDown.desktop({
    padding: `50px 20px`,

    display: 'flex',
  })};
`;
