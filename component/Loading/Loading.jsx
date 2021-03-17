import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { useImageContext } from '../../context/ImageContext';
const Loading = () => {
  const { loading } = useImageContext();
  return (
    <LoadConatiner>
      <ClipLoader color={'#003D8D'} size={50} margin={100} />
    </LoadConatiner>
  );
};

export default Loading;
const LoadConatiner = styled.div`
  position: absolute;

  z-index: 999;
  margin-left: 40%;
  margin-top: 100px;
`;

const LoadBackground = styled.div`
  &:after:before {
    content: '';
  }
`;
