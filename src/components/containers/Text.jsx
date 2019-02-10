import React from 'react';
import { Card } from '../constants/molecules';
import { CardList } from '../constants/organisms';

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

const generateSchoolGroups = schoolGroups => (
  schoolGroups.map(({
    name,
    id,
    city,
    street,
    street_number,
    postal_code,
    count_of_students,
  }) => (
    <Card
      key={name}
      title={name}
      to={`/school-group/${id}`}
      list={[
        `${city} ${postal_code}`,
        `${street} ${street_number}`,
        `Students: ${count_of_students}`,
      ]}
    />
  ))
);

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

const shouldGenerateList = (list, element) => {
  if (list.length > 0) {
    return element;
  }
  return null;
};

export default ({ query }) => {
  const {
    data: { schools, school_groups, partners },
    error,
    loading,
  } = query;
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  return [
    shouldGenerateList(
      schools,
      <CardList entity={{ name: 'school', method: 'add' }} title="Schools" subtitle={`${schools.length} results`}>
        {generateSchools(schools)}
      </CardList>,
    ),
    shouldGenerateList(
      school_groups,
      <CardList entity={{ name: 'school_group', method: 'add' }} title="School groups" subtitle={`${school_groups.length} results`}>
        {generateSchoolGroups(school_groups)}
      </CardList>,
    ),
    shouldGenerateList(
      partners,
      <CardList entity={{ name: 'partner', method: 'add' }} title="Partners" subtitle={`${partners.length} results`}>
        {generatePartners(partners)}
      </CardList>,
    ),
  ];
};
