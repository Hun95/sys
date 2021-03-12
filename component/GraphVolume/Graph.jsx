import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useGlobalContext } from '../../context/context';
import { breakDown } from '../../global/Theme';

const Graph = () => {
  const { secondSecRef, stop } = useGlobalContext();
  const progressRef = useRef();

  useEffect(() => {
    const handle = () => {
      if (!secondSecRef.current) return;
      if (secondSecRef.current.getBoundingClientRect().top < 10) {
        if (progressRef.current.style.animationPlayState === 'running') {
          return;
        }
        progressRef.current.style.animation = `graph 0.8s forwards ease `;

        if (window.matchMedia('(max-width: 768px').matches) {
          progressRef.current.style.animation = `graphmobile 0.8s forwards ease`;
        }
      }
    };
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, [stop]);
  return (
    <ProgressContainer>
      <ProgressBar ref={progressRef} />
      <p>속도</p>
    </ProgressContainer>
  );
};

export default Graph;

const ProgressContainer = styled.div`
  margin: 0 auto;

  position: relative;
  top: 180px;
  p {
    margin-left: 5px;
    font-weight: bold;
  }
  ${breakDown.phone({ top: '100px' })}
`;

const ProgressBar = styled.div`
  background-color: #003d8d;
  width: 50px;
  height: 20px;
  border-radius: 50px;
  position: absolute;
  animation: none;
  transform: rotate(180deg);
  transform-origin: top;
  ${({ isMobile }) => {
    if (isMobile === true) {
      return css`
        animation: graphmobile 0.8s forwards ease;
      `;
    } else if (isMobile === false) {
      return css`
        animation: graph 0.8s forwards ease;
      `;
    }
  }}
  @keyframes graph {
    from {
      height: 20px;
    }
    to {
      height: 350px;
    }
  }
  @keyframes graphmobile {
    from {
      height: 10px;
    }
    to {
      height: 200px;
    }
  }
`;
