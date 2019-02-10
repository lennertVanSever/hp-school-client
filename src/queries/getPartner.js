import gql from 'graphql-tag';

export default gql`
  query getPartner($id: Int!){
    partner(id: $id){
      name
      education_focused
      schools {
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
    }
  }
`;
