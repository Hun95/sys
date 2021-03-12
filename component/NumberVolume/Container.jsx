import React from 'react';
import { useGlobalContext } from '../../context/context';
import Number from './Number';
import Para from './Para';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';

const Container = () => {
  const { firstSecRef } = useGlobalContext();
  return (
    <Section ref={firstSecRef}>
      <Para />
      <Number />
    </Section>
  );
};

export default Container;

const Section = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  justify-content: center;

  ${breakDown.tablet({
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: 'none',
  })}
  ${breakDown.phone({
    marginTop: '2rem',
  })}
`;

const SectionContainer = styled.div``;
