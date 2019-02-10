import React from 'react';
import { School, Partner } from '.';

export default ({ match: { params: { entity } } }) => {
  switch (entity) {
    case 'school':
      return <School />;

    case 'partner':
      return <Partner />;

    default:
      return <p>Not found</p>;
  }
};
