import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

import { NavProvider } from '../context/NavContext';
const Layout = ({ children }) => {
  return (
    <>
      <Main>
        <NavProvider>
          <Nav />
        </NavProvider>

        {children}
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.section`
  margin: 0;
  padding: 0;
`;
