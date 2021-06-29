import Button from '../Button/Button';
import Dynamic from '../DynamicButton/Dynamic';
import React from 'react';
import { breakDown } from '../../global/Theme';
import styled from 'styled-components';
import { useMenuContext } from '../../context/MenuContext';

const Container = () => {
  const { isMobile } = useMenuContext();
  return (
    <Section>
      <Dynamic />
      {!isMobile && <Button target='__blank'>더 신나는 웹사이트 체험하기</Button>}
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
