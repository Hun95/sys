import React from 'react';
import styled from 'styled-components';

import { FaHorseHead } from 'react-icons/fa';
import { breakDown } from '../../global/Theme';
const Para = () => {
  return (
    <Container>
      <FaHorseHead />
      <h1>
        경주마처럼
        <br />
        빠르게
      </h1>
      <p>
        빠르고
        <br />
        쾌적한 환경의
        <br />
        홈페이지를 제작합니다.
      </p>
    </Container>
  );
};

export default Para;

const Container = styled.div`
  margin: 0 auto;

  h1 {
    font-size: 50px;
    ${breakDown.phone({ fontSize: '1.5rem' })}
  }
  svg {
    font-size: 50px;
    ${breakDown.phone({ fontSize: '2rem' })}
  }
  p {
    font-size: 20px;
    line-height: 1.6;
    color: #ababab;
    ${breakDown.phone({ fontSize: '0.85rem' })}
  }
`;
