import React, { useEffect } from 'react';
import PageHeader from '../../component/PageHeader/Container';
import ImageBox from '../../component/ImageBox/ImageBox';
import { useImageContext } from '../../context/ImageContext';
import styled from 'styled-components';
const index = () => {
  const { data, first, second, third } = useImageContext();

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
          {first.map((datas) => {
            return (
              <ImageBox
                key={datas.id}
                company={datas.company}
                url={datas.url}
              />
            );
          })}
        </SecondGridContainer>
        <SecondGridContainer>
          {second.map((datas) => {
            return (
              <ImageBox
                key={datas.id}
                company={datas.company}
                url={datas.url}
              />
            );
          })}
        </SecondGridContainer>
        <SecondGridContainer>
          {third.map((datas) => {
            return (
              <ImageBox
                key={datas.id}
                company={datas.company}
                url={datas.url}
              />
            );
          })}
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
