import React, { useRef } from 'react';
import styled from 'styled-components';

import { useLazyLoading } from '../../hooks/useLazyLoading';
const Container = () => {
  const ref = useRef();
  const seref = useRef();
  useLazyLoading(ref, 100, 'backgroundColor', 'red');
  useLazyLoading(seref, 100, 'color', 'blue');
  // useLazyLoading(seref, 200, 'blue');
  // const handleScroll = (value) => {
  //   (entry) => {
  //     entry.forEach((entries) => {
  //       const { current } = ref;
  //       if (!entries.isIntersecting) return;
  //       if (entries.boundingClientRect.top < 100) {
  //         current.style.background = value;
  //       }
  //     });
  //   };
  // };
  // useEffect(() => {
  //   const { current } = ref;

  //   // const observer = new IntersectionObserver(handleScroll, {});
  //   // observer.observe(current);
  //   // return () => observer && observer.disconnect();
  //   const handleScroll = ([entry]) => {
  //     if (entry.boundingClientRect.top < 100) {
  //       ref.current.style.background = 'red';
  //       ref.current.id = 'hh';
  //     }
  //   };
  //   const observer = new IntersectionObserver(handleScroll, {
  //     root: null,
  //   });
  //   console.log(observer);
  //   observer.observe(ref.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // });
  return (
    <Section>
      <div ref={ref}>hello</div>
      <div ref={seref}>hello</div>
      <div>hello</div>
    </Section>
  );
};

export default Container;

const Section = styled.div`
  height: 100vh;

  div {
    margin: 0 auto;
    position: relative;
    padding-top: 200px;
    text-align: center;
  }
`;
