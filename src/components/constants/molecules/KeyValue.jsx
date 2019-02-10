import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const Label = styled.p`
  width: 40%;
  font-size: 14pt;
  max-width: 200px;
`;

const Value = styled.p`
  width: 60%;
  padding: 5px;
  padding-right: 0px;
  box-sizing: border-box;
`;


export default ({ label, value}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
}
