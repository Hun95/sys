import React from 'react';
import styled from 'styled-components';

import { breakDown } from '../../global/Theme';
import { GiWormMouth } from 'react-icons/gi';
const Container = ({ title, img, href }) => {
  return (
    <CardBox href={href} target='_blank'>
      <ImgContainer>
        <img src={img} alt={title} />
        <Icon />
      </ImgContainer>
      <h1>{title}</h1>
    </CardBox>
  );
};

export default Container;

const CardBox = styled.a`
  &:visited,
  &:link {
    color: black;
  }
  width: 350px;
  height: 350px;
  max-height: 350px;

  ${breakDown.tablet({
    width: '400px',
    minHeight: '300px',
  })}
  ${breakDown.phone({
    width: '100%',
    minHeight: '500px',
  })}

 ${breakDown.smart({
    width: '100%',
    minHeight: '0',
  })}

  box-shadow: 0 20px 10px -15px rgb(197 192 249 / 20%);
  background: white;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  img {
    filter: brightness(0.8);
  }

  &:hover {
    img {
      filter: brightness(1);
    }
    transform: scale(1.03);
  }
`;
const Icon = styled(GiWormMouth)`
  font-size: 50px;
  color: #003d8d;
  position: relative;
  top: -33.5px;
  z-index: 2;
`;
const ImgContainer = styled.div`
  transition: all 0.3s ease-in-out;

  img {
    ${breakDown.phone({
      width: '100%',
      minHeight: '300px',
    })}
    ${breakDown.smart({
      width: '100%',
      minHeight: '0',
    })}
    width: 100%;
    max-height: 200px;
    min-height: 200px;
    padding: 5px;
    object-position: center;
    object-fit: cover;
  }
`;

Container.defaultProps = {
  title: 'LG생활건강',
  img: '/dd.jpg',
  subtitle: '화려한 애니매이션',
  href: '',
};
