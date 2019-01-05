import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { Link, Route } from 'react-router-dom';
import { getSchools, getSearch } from '../../queries';
import { Search } from '../constants/molecules';
import { Text, Map } from '.';

const Main = styled.main`
  margin: 20px 0px 0px 20px;
`;

const LinkWrapper = styled.div`
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
`;

export default ({ match: { path } }) => {
  const { data: { search } } = useQuery(getSearch, { suspend: false });
  const query = useQuery(getSchools, { variables: { search, limit: 300 }, suspend: false });
  console.log(path);
  return (
    <Main>
      <Search />
      <LinkWrapper>
        <StyledLink to={`${path}/text`}>Text</StyledLink>
        <StyledLink to={`${path}/map`}>Map</StyledLink>
      </LinkWrapper>
      <Route path={`${path}/text`} render={() => <Text query={query} />} />
      <Route path={`${path}/map`} render={() => <Map query={query} />} />
    </Main>
  );
};
