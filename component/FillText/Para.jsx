import React, { useEffect } from 'react';
import styled from 'styled-components';
import { breakDown } from '../../global/Theme';
import { useGlobalContext } from '../../context/context';

const data = [
  '글씨가 예쁘게 보이는 이유는',
  '재미있는 효과 때문일까요?',
  '아니면, 당신의 마음에',
  '꼭 와닿았기 때문일까요?',
];

let newArr = [];

for (let i = 0; i < data.length; i++) {
  newArr.push(data[i].split(''));
}

const Para = () => {
  const { thirdSecRef, stop, setStop } = useGlobalContext();

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const FillText = async (id) => {
    const first = document.getElementById(id);
    for (let i = 0; i < first.childNodes.length; i++) {
      await sleep(23);
      first.childNodes[i].id = 'fill';
    }
    if (first.childNodes.id === 'fill') {
      return;
    }
  };

  useEffect(() => {
    const handle = () => {
      if (stop) return;

      if (!thirdSecRef.current) return;

      if (thirdSecRef.current.getBoundingClientRect().top < 200) {
        FillText(0);
      }
      if (thirdSecRef.current.getBoundingClientRect().top < 0) {
        FillText(1);
      }
      if (thirdSecRef.current.getBoundingClientRect().top < -100) {
        FillText(2);
      }
      if (thirdSecRef.current.getBoundingClientRect().top < -200) {
        FillText(3);
        setStop(true);
      }
    };

    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, [stop]);
  return (
    <Container>
      {newArr.map((element, index) => (
        <div id={index} key={index}>
          {element.map((ele, index) => {
            return <span key={index}>{ele}</span>;
          })}
        </div>
      ))}
    </Container>
  );
};

export default Para;

const Container = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    ${breakDown.phone({ fontSize: '1.5rem' })}
    font-size: 50px;
    font-weight: bold;
    line-height: 150%;
    color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #202121;
  }
  #fill {
    color: black;

    -webkit-text-stroke-width: 0;
    -webkit-text-stroke-color: none;
  }
  text-align: center;
`;
