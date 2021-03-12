import React, { useEffect, useState, useRef } from 'react';
import PageHeader from '../../component/PageHeader/Container';
import ImageBox from '../../component/ImageBox/ImageBox';
import { useImageContext } from '../../context/ImageContext';
import { breakDown } from '../../global/Theme';
import styled from 'styled-components';
const index = () => {
  const { data, first, second, third, setFirst } = useImageContext();

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
  grid-template-columns: repeat(3, 1fr);
  padding: 0 calc(100% - 90vw);

  &::not(:first-child) {
    margin-left: 20px;
  }
  ${breakDown.desktop({
    gridTemplateColumns: '1fr',
    marginLeft: 0,
    marginTop: '0',
  })}
`;
const SecondGridContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
