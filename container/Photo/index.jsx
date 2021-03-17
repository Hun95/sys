import React, { useEffect, useState, useRef } from 'react';
import PageHeader from '../../component/PageHeader/Container';
import ImageBox from '../../component/ImageBox/ImageBox';
import { useImageContext } from '../../context/ImageContext';
import { breakDown } from '../../global/Theme';
import styled from 'styled-components';
import Loader from '../../component/Loading/Loading';
const index = () => {
  const {
    data,
    first,
    second,
    third,
    setFirst,
    loading,
    viewport,
    target,
  } = useImageContext();

  return (
    <>
      <ImageContainer>
        <PageHeader
          ref={viewport}
          first='사진'
          second='찾아가는'
          third='공간입니다.'
          img='/tower.webp'
        />
        <TopGridContainer>
          {loading ? (
            <Loader />
          ) : (
            <>
              <SecondGridContainer>
                {first.map((datas) => {
                  const lastEl = datas.id === datas.length - 1;
                  return (
                    <ImageBox
                      key={datas.id}
                      company={datas.company}
                      url={datas.url}
                      ref={lastEl ? target : null}
                    />
                  );
                })}
              </SecondGridContainer>
              {/* <SecondGridContainer>
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
              </SecondGridContainer> */}
            </>
          )}
        </TopGridContainer>
      </ImageContainer>
    </>
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
