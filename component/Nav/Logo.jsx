import React from 'react';

// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { breakDown } from '../../global/Theme';
import styled from 'styled-components';
const Logo = ({ sticky }) => {
  return (
    <Container sticky={sticky}>
      <h1>
        <Link href='/'>
          <a>
            <img src='/mus.png' className='class' alt='logo' />
            수염난친구들
          </a>
        </Link>
      </h1>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  margin-top: -5px;
  .class {
    width: 40px;

    ${breakDown.tablet({ width: '40px' })}
    ${breakDown.phone({ width: '30px', marginTop: 0 })}
  }
  span {
    color: ${({ sticky }) => (sticky ? 'black' : 'white')};
    margin-left: 15px;
    position: relative;
    bottom: 5px;
    ${breakDown.phone({ marginLeft: '10px' })}
  }

  h1 {
    margin: 0;
    margin-left: 3rem;
    margin-top: 0.75rem;

    font-size: 17px;
    ${breakDown.tablet({ fontSize: '20px' })}
    ${breakDown.phone({ fontSize: '12px', marginLeft: 5 })}
  }
`;
