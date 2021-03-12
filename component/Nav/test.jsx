import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavContext } from '../../context/NavContext';
import { breakDown } from '../../global/Theme';

import { NavLink } from 'react-router-dom';

const Test = () => {
  const { isSticky, open, setOpen } = useNavContext();

  return (
    <div>
      <BackGround open={open} />
      <Burger open={open} setOpen={setOpen} isSticky={isSticky} />

      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};
export default Test;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ open }) => (open ? 'rgba(34,34,34,.5)' : 'none')};
  width: 100%;
  height: 100vh;
  z-index: 18;
  display: ${({ open }) => (open ? 'visible' : 'none')};
`;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: center;
  width: 400px;
  position: fixed;
  z-index: 19;
  top: 0;
  right: 0;

  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }
  img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translateX(-50%);
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
      background: #003d8d;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to='/price'>가격정책</NavLink>
      <NavLink to='/project'>
        다른 작품보기
        <span style={{ fontSize: '14px', letterSpacing: 0, color: 'red' }}>
          (준비중)
        </span>
      </NavLink>
      <NavLink to='/'>
        사진관{' '}
        <span style={{ fontSize: '14px', letterSpacing: 0, color: 'red' }}>
          (준비중)
        </span>
      </NavLink>
      <NavLink to='/'>
        연락하기{' '}
        <span style={{ fontSize: '14px', letterSpacing: 0, color: 'red' }}>
          (준비중)
        </span>
      </NavLink>
    </StyledMenu>
  );
};
const BurgerContainer = styled.div`
  display: inline-flex;
  position: relative;
  margin-left: 50%;
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
const Burger = ({ open, setOpen, isSticky }) => {
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

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
