import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Article = styled.article`
  background-color: white;
  width: 100%;
  max-width: 300px;
  height: 150px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-right: 10px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 2px;
`;

const Li = styled.li`
  opacity: .7;
  margin: 5px 0px;
`;

function generateList(list) {
  return list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Li key={index}>{ item }</Li>
  ));
}

export default ({ title, list, to }) => (
  <Article>
    <Link to={to}><Title>{title}</Title></Link>
    <ul>
      {generateList(list)}
    </ul>
  </Article>
);
