import React from 'react';
import styled from 'styled-components';

import Dynamic from '../DynamicButton/Dynamic';
import Button from '../Button/Button';
import { breakDown } from '../../global/Theme';
import { useMenuContext } from '../../context/MenuContext';
const Container = () => {
  const { isMobile } = useMenuContext();
  return (
    <Section>
      <Dynamic />
      {!isMobile && (
        <Button href='https://hun95.github.io' target='__blank'>
          더 신나는 웹사이트 체험하기
        </Button>
      )}
    </Section>
  );
};

export default Container;

const Section = styled.section`
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  ${breakDown.phone({ flexDirection: 'column' })}
`;
