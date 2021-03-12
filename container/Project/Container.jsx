import React from 'react';
import styled from 'styled-components';

import { breakDown } from '../../global/Theme';
import Card from '../../component/Card/Container';
import { useProjectContext } from '../../context/ProjectContext';
const Container = () => {
  const { newMenu } = useProjectContext();
  return (
    <GridContainer>
      {newMenu.map((categories) => {
        const { title, img, href } = categories;
        return <Card key={title} title={title} img={img} href={href} />;
      })}
    </GridContainer>
  );
};

export default Container;

const GridContainer = styled.section`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(4, 1fr);

  padding: 0 calc(100% - 95vw);
  grid-gap: 0 20px;
  justify-content: center;
  position: relative;
  max-width: 1450px;

  ${breakDown.desktop({
    gridTemplateColumns: 'repeat(2, 1fr)',
  })}

  ${breakDown.phone({
    gridTemplateColumns: 'repeat(1, 1fr)',

    padding: '0 20px',
  })};
`;
