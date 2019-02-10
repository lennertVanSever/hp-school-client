import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-apollo-hooks';

import { getPartner, getSearch, getOverview } from '../../queries';
import { KeyInput, Card } from '../constants/molecules';
import { CardList } from '../constants/organisms';

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

const generateSchools = schools => (
  schools.map(({
    name,
    id,
    city,
    postal_code,
    street,
    street_number,
    installed_base,
    website,
    bring_your_own_device,
  }) => (
    <Card
      key={name}
      title={name}
      to={`/school/${id}`}
      list={[
        `${city} ${postal_code}`,
        `${street} ${street_number}`,
        installed_base,
        website,
        `BYOD: ${bring_your_own_device}`,
      ]}
    />
  ))
);


export default withRouter(({ match: { params: { id } } }) => {
  const {
    data,
    error,
    loading,
  } = useQuery(getPartner, { variables: { id: Number(id) }, suspend: false });
  const { data: { search } } = useQuery(getSearch, { suspend: false });
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  const {
    partner: {
      name,
      education_focused,
      schools,
    },
  } = data;
  const refetchQueries = [
    {
      query: getPartner,
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
    entity: 'partner',
    entityId: id,
    refetchQueries,
  };

  return (
    <Main>
      <Section>
        <InputGroup>
          <KeyInput type="text" value={name} name="name" labelName="Name of partner" {...genericKeyInputProps} />
        </InputGroup>
        <InputGroup>
          <KeyInput type="boolean" value={education_focused} name="education_focused" labelName="Education focused" {...genericKeyInputProps} />
        </InputGroup>
      </Section>
      <CardList select={`/select/school/partner/${id}`} title="Schools" subtitle={`${schools.length} results`}>
        {generateSchools(schools)}
      </CardList>
    </Main>
  );
});
