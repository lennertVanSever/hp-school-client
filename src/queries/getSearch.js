import gql from 'graphql-tag';

export default gql`
  query {
    search @client
  }
`;
