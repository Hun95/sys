import React from 'react';
import styled, { css } from 'styled-components';
import { breakDown } from '../../global/Theme';

const Container = ({ first, second, third, img, theme }) => {
  return (
    <Back style={{ backgroundImage: `url(${img})` }} theme={theme}>
      <TextContainer>
        <h1>{first}</h1>
        <br />
        <h2>{second}</h2>
        <h2>{third}</h2>
      </TextContainer>

      <Filter />
    </Back>
  );
};

export default Container;
const Back = styled.section`
  width: 100%;
  position: relative;
  margin-top: -70px;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => {
    if (theme === 'price') {
      return css`
        background-position: 45% 70%;
      `;
    } else if (theme === 'project') {
      return css`
        background-position: 45% 70%;
      `;
    }
  }}
  height: 550px;
  background-color: #003d8d;
`;

const TextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  bottom: 20px;

  padding: 0 calc(100% - 80vw);
  color: white;

  h1 {
    font-size: 3rem;
    ${breakDown.desktop({ fontSize: '2rem' })}
  }
  h2 {
    ${breakDown.desktop({ fontSize: '1rem' })}
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent 73%);
  z-index: 1;
`;
