import React from 'react';
import styled from 'styled-components';
import { AiOutlineDownload } from 'react-icons/ai';
import { breakDown } from '../../global/Theme';

const Para = () => {
  return (
    <ParaContainer>
      <AiOutlineDownload />
      <h1>
        REACT
        <br />
        누적 다운로드
      </h1>

      <p>
        전 세계인들에게 사랑받는
        <br />
        개발언어를 사용합니다.
        <br />
        안정적이면서
        <br />
        현대적인 웹사이트를 제작합니다.
      </p>
      <p>2021년 2월 기준</p>
    </ParaContainer>
  );
};

export default Para;

const ParaContainer = styled.div`
  margin: 0 auto;
  h1 {
    font-size: 50px;
    ${breakDown.tablet({ fontSize: '40px' })}
    ${breakDown.phone({ fontSize: '1.5rem' })}
  }
  svg {
    font-size: 50px;
    ${breakDown.tablet({ fontSize: '40px' })}
    ${breakDown.phone({ fontSize: '40px' })}
  }
  p {
    font-size: 20px;
    line-height: 1.6;
    color: #ababab;
    ${breakDown.tablet({ fontSize: '18px' })}
    ${breakDown.phone({ fontSize: '0.85rem' })}
  }
`;
