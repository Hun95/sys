import React from 'react';
import Button from '../Button/Button';
import Contact from './Contact';
import styled, { css } from 'styled-components';
import { useMenuContext } from '../../context/MenuContext';
const Dynamic = () => {
  const { isOpen, setIsOpen, anmOpen, setAnmOpen } = useMenuContext();

  return (
    <>
      <Button
        onClick={() => {
          setAnmOpen('yes');
          setIsOpen(!isOpen);
        }}
      >
        수염난 친구와 연락하기
      </Button>
      <MobileNavModal open={anmOpen} />
      {isOpen && <Contact />}
    </>
  );
};

export default Dynamic;

const MobileNavModal = styled.section`
  @keyframes fade-in {
    from {
      visibility: hidden;
      opcaity: 0;
    }
    1% {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      visibility: visible;
      opcaity: 1;
    }
    99% {
      visibility: visible;
      opacity: 0;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
  }
  position: fixed;

  top: 0;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 20;
  visibility: hidden;
  content: ' ';
  max-width: 100%;

  background-color: rgba(34, 34, 34, 0.5);
  ${({ open }) => {
    if (open === 'yes') {
      return css`
        animation: fade-in 300ms ease-in-out forwards;
      `;
    } else if (open === 'nop') {
      return css`
        animation: fade-out 300ms ease-in-out forwards;
      `;
    }
  }}
`;
