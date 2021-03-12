import React from 'react';
import styled from 'styled-components';
import SyncLoader from 'react-spinners/SyncLoader';

const Loading = () => {
  return (
    <LoadBackground>
      <LoadConatiner>
        <SyncLoader color={'#222'} loading={true} size={15} margin={2} />
      </LoadConatiner>
    </LoadBackground>
  );
};

export default Loading;

const LoadConatiner = styled.div`
  position: absolute;
  padding: 50px;
  top: 50%;
  left: 50%;

  overflow: hidden;
  transform: translate(-50%, -50%);
`;

const LoadBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  position: relative;
  z-index: 99;
`;
