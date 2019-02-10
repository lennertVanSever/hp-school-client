import gql from 'graphql-tag';

export default gql`
  query getSchool($id: Int!){
    school(id: $id){
      name
      address
      city
      postal_code
      street
      street_number
      count_of_students
      school_level
      school_type
      installed_base
      bring_your_own_device
      website
      longitude
      latitude
      school_group {
        id
        name
        city
        address
        street
        street_number
        postal_code
        count_of_students
      }
      partners {
        id
        name
        education_focused
      }
      sell_out {
        units
        fiscal_year
        hp_quarter
      }
    }
  }
`;
