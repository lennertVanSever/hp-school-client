import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './css/reset.css';

import Routes from './Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
