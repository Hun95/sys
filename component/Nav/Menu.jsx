import React from 'react';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
import Link from 'next/link';
import { NavLink, Router } from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link active='.active' href='/project'>
        <a>다른 프로젝트</a>
      </Link>
      <Link active='.active' href='/price'>
        <a>가격정책</a>
      </Link>
      <Link active='.active' href='/photo'>
        <a>
          사진관{' '}
          <span style={{ fontSize: '14px', letterSpacing: 0, color: 'red' }}>
            (준비중)
          </span>
        </a>
      </Link>
      <Link active='.active' href='/contact'>
        <a>
          연락하기{' '}
          <span style={{ fontSize: '14px', letterSpacing: 0, color: 'red' }}>
            (준비중)
          </span>
        </a>
      </Link>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav`
  .active {
    color: white;
    background: #003d8d;
  }
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
  overflow-x: hidden;
  @media (max-width: 576px) {
    width: 70%;
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
