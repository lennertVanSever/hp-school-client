import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  margin-left: 20px;
  margin-top: 20px;
`;

const ChildWrapper = styled.div`
  display: float;
  overflow: auto;
  padding-bottom: 2px;
`;

const Title = styled.h1`
  font-size: 20pt;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default ({ title, list, children }) => (
  <Section>
    <Title>{title}</Title>
    <ChildWrapper>
      {children}
    </ChildWrapper>
  </Section>
);
