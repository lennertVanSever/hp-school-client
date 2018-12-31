import gql from 'graphql-tag';

export default gql`
  query {
    schools(range:{ limit: 30, offset: 0 }, search: "brussel") {
      name
      address
      count_of_students
      school_level
      school_type
      installed_base
      bring_your_own_device
      website
    }
  }
`;
