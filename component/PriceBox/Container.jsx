import React from 'react';
import { breakDown } from '../../global/Theme';
import styled from 'styled-components';
const PriceContainer = ({ title, controller, info, price, isGray, large }) => {
  return (
    <Section isGray={isGray} large={large}>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='controller'>{controller}</div>
      <div className='info'>
        <p>{info}</p>
      </div>
      <div className='price'>{price}원</div>
    </Section>
  );
};

export default PriceContainer;
const Section = styled.div`
  display: grid;
  border: 1px solid #cfd8dc;
  border-radius: 5px;
  ${breakDown.desktop({
    minHeight: '500px',
    display: 'block',
    fontFamily: '',
    marginTop: '50px',
  })};

  div {
    min-height: ${({ large }) => (large ? '230px' : '100px')};
    ${breakDown.desktop({
      minHeight: '20px',
      marginTop: '20px',
    })};
  }
  grid-template-columns: 2fr 2fr 5fr 1fr;
  .title {
    font-size: 20px;
    font-weight: bold;
    border-right: 1px solid #cfd8dc;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    ${breakDown.desktop({
      maxHeight: '40px',
      background: 'none',
      color: 'black',
      marginTop: '15px',
    })};
  }

  .controller {
    border-right: 1px solid #cfd8dc;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakDown.desktop({
      paddingTop: '10px',
    })};
  }
  .info {
    font-size: 15px;
    display: flex;
    p {
      padding-top: 15px;
      ${breakDown.desktop({
        textAlign: 'left',
        margin: '0 auto',
        width: '300px',
      })}
    }
    padding: 0 20px;
    position: relative;
    ${breakDown.desktop({
      minHeight: '250px',

      padding: '10px 0',
    })};
    border-right: 1px solid #cfd8dc;
  }
  .price {
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    ${breakDown.desktop({ fontSize: '20px' })};
    color: black;
  }
  background: ${({ isGray }) => (isGray ? '#F8F8F8' : 'white')};
  color: ${({ isGray }) => isGray && ''};
`;
