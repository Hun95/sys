import React, { useState, useEffect } from 'react';
import Graph from './Graph';
import Para from './Para';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
import { useGlobalContext } from '../../context/context';

const Container = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [innerHeight, setInnerHeight] = useState(0);
  const { secondSecRef } = useGlobalContext();
  useEffect(() => {
    const changeInnerHeight = () => {
      const newInnerHeight = window.innerWidth;
      setInnerHeight(newInnerHeight);

      if (innerHeight < 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    changeInnerHeight();
    window.addEventListener('resize', changeInnerHeight);
    return () => {
      window.removeEventListener('resize', changeInnerHeight);
    };
  }, [innerHeight]);

  return (
    <Section ref={secondSecRef}>
      {isMobile ? (
        <>
          <Graph />
          <Para />
        </>
      ) : (
        <>
          <Para />
          <Graph />
        </>
      )}
    </Section>
  );
};

export default Container;

const Section = styled.section`
  height: 100vh;
  background: #f8f8f8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  ${breakDown.phone({
    padding: `0 20px`,
    /* gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr 1fr', */
  })}
`;
