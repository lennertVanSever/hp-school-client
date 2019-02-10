import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery, useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import { getSchool, getSearch, getOverview } from '../../queries';
import { KeyInput, KeyValue, Card } from '../constants/molecules';
import { CardList } from '../constants/organisms';
import { SelectEntity } from '.';

const Section = styled.section`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const InputGroup = styled.div`
  width: calc(50% - 50px);
  padding: 20px;
  margin-right: 50px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Main = styled.main`
  margin: 20px;
`;

const Button = styled.button`
  background-color: #0095D9;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
`;

const generatePartners = partners => (
  partners.map(({
    name,
    id,
    education_focused,
  }) => (
      <Card
        key={name}
        title={name}
        to={`/partner/${id}`}
        list={[
          `Education focused: ${education_focused}`,
        ]}
      />
    ))
);


export default withRouter(({
  match: {
    params: { id },
    url,
  },
}) => {
  const {
    data,
    error,
    loading,
    refetch,
  } = useQuery(getSchool, { variables: { id: Number(id) }, suspend: false });
  const { data: { search } } = useQuery(getSearch, { suspend: false });
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  const {
    school: {
      name,
      count_of_students,
      school_level,
      school_type,
      bring_your_own_device,
      installed_base,
      city,
      postal_code,
      street,
      street_number,
      longitude,
      latitude,
      partners,
    },
  } = data;
  const refetchQueries = [
    {
      query: getSchool,
      variables: {
        id: Number(id),
      },
    },
    {
      query: getOverview,
      variables: {
        search,
        limit: 300,
      },
    },
  ];
  
  const genericKeyInputProps = {
    entity: 'school',
    entityId: id,
    refetchQueries,
  };

  const recalculateLocation = useMutation(
    gql`
      mutation recalculate_location($city: String, $street: String, $street_number: String, $postal_code: Int, $id: Int) {
        recalculate_location(city:$city, street:$street, street_number:$street_number, postal_code:$postal_code, id: $id) {
          name
        }
      }
    `,
    {
      variables: {
        city,
        postal_code,
        street,
        street_number,
        id,
      },
      refetchQueries,
    },
  );

  return (
    <Main>
      <Section>
        <InputGroup>
          <KeyInput type="text" value={name} name="name" labelName="Name of school" {...genericKeyInputProps} />
          <KeyInput type="text" value={city} name="city" labelName="City" {...genericKeyInputProps} />
          <KeyInput type="number" value={postal_code} name="postal_code" labelName="Postal code" {...genericKeyInputProps} />
          <KeyInput type="text" value={street} name="street" labelName="Street" {...genericKeyInputProps} />
          <KeyInput type="number" value={street_number} name="street_number" labelName="Street number" {...genericKeyInputProps} />
          <KeyValue label="Longitude" value={longitude} />
          <KeyValue label="Latitude" value={latitude} />
          <form
            onSubmit={
              (event) => {
                event.preventDefault();
                recalculateLocation();
              }
            }
          >
            <Button type="submit">Recalculate location</Button>
          </form>
        </InputGroup>
        <InputGroup>
          <KeyInput type="number" value={count_of_students} name="count_of_students" labelName="Count of students" {...genericKeyInputProps} />
          <KeyInput type="text" value={school_level} name="school_level" labelName="School level" {...genericKeyInputProps} />
          <KeyInput type="text" value={school_type} name="school_type" labelName="School type" {...genericKeyInputProps} />
          <KeyInput type="text" value={installed_base} name="installed_base" labelName="Installed base" {...genericKeyInputProps} />
          <KeyInput type="boolean" value={bring_your_own_device} name="bring_your_own_device" labelName="BYOD" {...genericKeyInputProps} />
        </InputGroup>
      </Section>
      <CardList entity={{ name: 'partner', method: 'select' }} title="Partners" subtitle={`${partners.length} results`}>
        {generatePartners(partners)}
      </CardList>
      {/*<SelectEntity refetchQueries={refetchQueries} alreadySelectedEntities={partners} parentId={id} parentRoute={url} />*/}
      <Route path="/:entity/:id/select/partner" render={() => <SelectEntity refetchQueries={refetchQueries} alreadySelectedEntities={partners} parentId={id} parentRoute={url} />} exact />
    </Main>
  );
});
