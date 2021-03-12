import React from 'react';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
const Hamburger = ({ open, setOpen, isSticky }) => {
  return (
    <BurgerContainer>
      <StyledBurger
        open={open}
        isSticky={isSticky}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerContainer>
  );
};

export default Hamburger;
const BurgerContainer = styled.div`
  position: relative;
  right: 13px;
`;
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  z-index: 20;
  ${breakDown.phone({ height: '1.5rem', width: '1.5rem' })};
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    ${breakDown.phone({ width: '1.5rem', height: '0.2rem' })};
    background: ${({ open, isSticky }) =>
      open || isSticky ? '#0D0C1D' : 'white'};

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      @media screen and (max-width: 768px) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      @media screen and (max-width: 768px) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
  }
`;
