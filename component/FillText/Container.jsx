import React from 'react';
import Para from './Para';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/context';
const Container = () => {
  const { thirdSecRef } = useGlobalContext();
  return (
    <Section ref={thirdSecRef}>
      <Para />
    </Section>
  );
};

export default Container;

const Section = styled.section`
  height: 100vh;
`;
