import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiDownload } from 'react-icons/bi';
import { breakDown } from '../../global/Theme';
const Image = ({ company, url }) => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <ImageContainer
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <ImageBox src={url} />
      {visible && (
        <TitleBox>
          <Company>{company}</Company>
          <a href={url} download>
            <Download />
          </a>
        </TitleBox>
      )}
    </ImageContainer>
  );
};

export default Image;
Image.defaultProps = {
  url: '/dd.jpg',
  company: 'LG생활건강',
};
const Download = styled(BiDownload)`
  font-size: 40px;
  position: relative;

  color: black;
`;
const ImageBox = styled.img``;
const TitleBox = styled.div`
  position: absolute;

  margin-top: -50px;
  display: flex;
`;
const Company = styled.h1`
  font-size: 20px;
  color: white;
  position: relative;
  top: 8px;
  margin-right: 20px;
  &:hover {
    color: red;
  }
`;
const ImageContainer = styled.div`
  img {
  }
  width: 400px;
  height: auto;
  ${breakDown.desktop({ width: '300px', marginTop: 0 })}
  &:hover {
    img {
      filter: brightness(80%);
    }
  }

  &:not(:first-child) {
    margin-top: 30px;
  }
`;
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
