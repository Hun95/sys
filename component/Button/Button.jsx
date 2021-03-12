import React from 'react';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
const Button = ({ children, href, onClick, download }) => {
  return (
    <Btn onClick={onClick} target='_blank' href={href} download={download}>
      {children}
    </Btn>
  );
};

export default Button;

const Btn = styled.a`
  border: none;
  width: 400px;
  height: 60px;

  border: 1px solid #003d8d;
  color: #003d8d;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  font-size: 1.125rem;
  line-height: 60px;
  cursor: pointer;
  &:hover {
    background: #003d8d;
    color: white;
  }
  ${breakDown.phone({
    width: '250px',
    fontSize: '0.85rem',
  })}
`;
