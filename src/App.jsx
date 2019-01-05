import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import './css/reset.css';

import Routes from './Routes';

const typeDefs = `
  type Query {
    search: String!
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  clientState: {
    defaults: {
      search: '',
    },
    resolvers: {
      Mutation: {
        updateSearch: (_, { search }, { cache }) => {
          cache.writeData({ data: { search } });
          return null;
        },
      },
    },
    typeDefs,
  },
});

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
