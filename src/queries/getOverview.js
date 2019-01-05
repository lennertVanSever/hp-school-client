import gql from 'graphql-tag';

export default gql`
  query getOverview($search: String!, $limit: Int!) {
    schools(range:{ limit: $limit, offset: 0 }, search: $search) {
      id
      name
      city
      address
      postal_code
      street
      street_number
      count_of_students
      school_level
      school_type
      installed_base
      bring_your_own_device
      website
      latitude
      longitude
    }
    school_groups(range:{ limit: $limit, offset: 0 }, search: $search) {
      id
      name
      city
      address
      street
      street_number
      postal_code
      count_of_students
      latitude
      longitude
    }
    partners(range:{ limit: $limit, offset: 0 }, search: $search) {
      id
      name
      education_focused
    }
  }
`;
