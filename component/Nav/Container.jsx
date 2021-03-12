import React from 'react';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
import Test from './test';
import { useNavContext } from '../../context/NavContext';
import HamBurger from './Hamburger';
import Background from './Background';
import Menu from './Menu';
import Logo from './Logo';
const Container = () => {
  const { isSticky, open, setOpen } = useNavContext();

  return (
    <>
      <Header sticky={isSticky}>
        <ItemContainer>
          <Logo sticky={isSticky} />
          <HamBurger setOpen={setOpen} isSticky={isSticky} open={open} />
        </ItemContainer>
        <Background open={open} />
        <Menu open={open} setOpen={setOpen} />
      </Header>
    </>
  );
};

export default Container;
const Header = styled.nav`
  height: 70px;

  width: 100%;

  position: sticky;
  top: 0;
  background: ${({ sticky }) =>
    sticky ? 'rgba(255,255,255,.95)' : 'transparent'};
  z-index: 20;

  ${breakDown.phone({ height: '50px' })}
`;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  ${breakDown.phone({ padding: `10px 15px` })}
`;
