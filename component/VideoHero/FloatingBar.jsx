import React from 'react';
import styled from 'styled-components';

import { FiChevronsDown } from 'react-icons/fi';
const FloatingBar = () => {
  return <Icon />;
};

export default FloatingBar;

const Icon = styled(FiChevronsDown)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: white;
  z-index: 98;
  animation: init infinite 1s ease-in-out forwards alternate;
  cursor: pointer;
  @keyframes init {
    from {
      transform: translate3d(0, -10px, 0);
    }
    to {
      transform: translate3d(0, 0px, 0);
    }
  }
`;
