import React from 'react';
import styled from 'styled-components';

import { breakDown } from '../../global/Theme';
import { AiOutlineClose } from 'react-icons/ai';

import { useMenuContext } from '../../context/MenuContext';
const Contact = () => {
  const { isOpen, setIsOpen, setAnmOpen } = useMenuContext();

  return (
    <Container>
      <CloseButton
        onClick={() => {
          setAnmOpen('nop');
          setIsOpen(!isOpen);
        }}
      />
      <h1>Contact Us</h1>
      <ItemContainer>
        <Item>
          <h1>1:1 채팅 바로가기</h1>
          <a href='https://open.kakao.com/o/skrtHdSc'>
            <img src='/Logo/kakao.png' alt='카카오톡' />
          </a>
        </Item>
        <Item>
          <h1>010.6413.5418</h1>
          <a href='tel:01064135418'>
            <img src='/Logo/call2.png' alt='전화걸기' />
          </a>
        </Item>
        <Item>
          <h1>hun95@kakao.com</h1>
          <a href='mailto:hun95@kakao.com'>
            <img src='/Logo/gmail.png' alt='메일 보내기' />
          </a>
        </Item>
      </ItemContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 600px;
  height: 400px;
  background: white;
  position: fixed;
  border: 1px solid #003d8d;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
  h1 {
    text-align: center;
    margin-top: 40px;
    font-size: 30px;
    ${breakDown.phone({
      fontSize: '20px',
      marginTop: '30px',
      textAlign: 'center',
      lineHeight: 0.5,
    })}
  }
  ${breakDown.phone({ width: '70%', height: '500px' })}
`;

const CloseButton = styled(AiOutlineClose)`
  font-size: 25px;
  float: right;
  margin: 15px 15px 0 0;
  cursor: pointer;
  ${breakDown.phone({
    fontSize: '20px',
    margin: '5px 5px 0 0',
    textAlign: 'center',
  })}
`;

const ItemContainer = styled.div`
  display: flex;

  justify-content: space-around;
  ${breakDown.phone({ flexDirection: 'column' })}
  align-items: center;
  position: relative;
  top: 50px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  /* border: 1px solid red; */
  height: 200px;
  max-width: 100%;
  ${breakDown.phone({
    width: '100%',
    height: '100%',
  })}
  h1 {
    font-size: 15px;
    ${breakDown.phone({ fontSize: '10px' })}
  }
  img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    ${breakDown.phone({ width: '50px', height: '50px' })}
    filter: brightness(60%);
    &:hover {
      filter: brightness(100%);
    }
  }
`;
