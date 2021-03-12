import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiDownload } from 'react-icons/bi';
import Button from '../Button/Button';
const Image = ({ company, url }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const handleMouseOver = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  useEffect(() => {
    console.log(ref.current.getBoundingClientRect());
  }, []);
  return (
    <Container>
      <ImageContainer
        ref={ref}
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
    </Container>
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
const ImageContainer = styled.figure`
  width: 400px;
  height: auto;
  &:hover {
    img {
      filter: brightness(80%);
    }
  }
`;
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
