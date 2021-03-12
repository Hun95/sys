import React from 'react';
import styled from 'styled-components';

// component
import { breakDown } from '../../global/Theme';
import FloatingBar from './FloatingBar';
const Container = () => {
  return (
    <>
      <HeroContainer>
        <VideoPlayer autoPlay muted playsInline loop>
          <source src='/video/korea.mp4' type='video/mp4'></source>
        </VideoPlayer>
      </HeroContainer>
      <HeroTextContainer>
        <h1>안녕하세요</h1>
      </HeroTextContainer>
      <FloatingBar />
    </>
  );
};

export default Container;

const HeroContainer = styled.section`
  z-index: 7;
  height: 100vh;
  margin-top: -70px;
  ${breakDown.phone({ marginTop: '-50px' })}
  position: relative;
  background: #000;
  :before {
    content: '';
    position: absolute;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  video {
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(60%);
    min-width: 100%;
    min-height: 100%;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100vh;

  filter: brightness(60%);
`;

const HeroTextContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.95;
  z-index: 12;
  color: white;
  h1 {
    ${breakDown.tablet({ fontSize: '60px' })}
    ${breakDown.phone({ fontSize: '1.5rem' })}
    font-size: 80px;
  }
`;
