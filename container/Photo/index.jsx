import React from 'react';
import PageHeader from '../../component/PageHeader/Container';
import Image from '../../component/ImageBox/ImageBox';
import styled from 'styled-components';
const index = () => {
  return (
    <ImageContainer>
      <PageHeader
        first='사진'
        second='찾아가는'
        third='공간입니다.'
        img='/tower.webp'
      />
      <TopGridContainer>
        <SecondGridContainer>
          <Image url='/tower.webp' />
          <Image />
          <Image />
          <Image />
          <Image />
        </SecondGridContainer>
        <SecondGridContainer>
          <Image />
          <Image url='/tower.webp' />
          <Image />
          <Image />
          <Image />
        </SecondGridContainer>
        <SecondGridContainer>
          <Image url='/tower.webp' />
          <Image />
          <Image />
          <Image />
          <Image />
        </SecondGridContainer>
      </TopGridContainer>
    </ImageContainer>
  );
};

export default index;

const ImageContainer = styled.div`
  background: #fff;
`;

const TopGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 calc(100% - 90vw);
`;
const SecondGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;
