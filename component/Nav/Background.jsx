import React from 'react';
import styled from 'styled-components';
const Background = ({ open }) => {
  return <BackGround open={open} />;
};

export default Background;
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
