import React from 'react';
import Layout from '../component/Layout';
import PageHeader from '../component/PageHeader/Container';

import { Filter } from '../component/Input/Filter';
import styled from 'styled-components';

import Projects from '../container/Project/Container';
const Project = () => {
  return (
    <Layout>
      <PageHeader
        first='프로젝트'
        second='다양한'
        third='것들을 경험하세요.'
        img='/truck.jpg'
        theme='project'
      />

      <FilterContainer>
        <Filter />
        <Projects />
      </FilterContainer>
    </Layout>
  );
};

export default Project;

const FilterContainer = styled.section`
  width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 50px 0;
  background: #f8f8f8;
  min-height: 100vh;
  align-items: center;
  display: flex;
`;
