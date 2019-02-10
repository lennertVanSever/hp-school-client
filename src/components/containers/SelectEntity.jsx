import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo-hooks';


const getPartners = gql`
  query getPartners($search: String!) {
    partners(search: $search, range:{ limit: 100, offset: 0 }) {
      id
      name
      education_focused
    }
  }
`;

const Dialogue = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 600px;
  max-height: 800px;
  overflow: auto;
  padding: 15px;
`;

const Background = styled(Link)`
  position: fixed;
  background-color: black;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: .5;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-left: 10px;
`;

function defineChecked(id, alreadySelectedEntities) {
  let isChecked = false;
  alreadySelectedEntities.forEach((entity) => {
    if (id === entity.id) isChecked = true;
  });
  return isChecked;
}

function generateEntities(parentId, entities, alreadySelectedEntities, linkEntity, refetchQueries) {

  return entities.map(({ name, id }) => {
    const checked = defineChecked(id, alreadySelectedEntities);
    return (
      <ListItem>
        <input
          onChange={() => {
            linkEntity({
              variables: {
                base_entity_id: parentId,
                base_entity_name: 'school',
                link_entity_id: id,
                link_entity_name: 'partner',
                remove: checked,
              },
              refetchQueries,
            });
          }}
          checked={checked}
          id={name}
          type="checkbox"
        />
        <Label htmlFor={name}>{name}</Label>
      </ListItem>
    );
  });
}

export default ({ parentRoute, alreadySelectedEntities, parentId, refetchQueries }) => {
  const {
    data,
    error,
    loading,
  } = useQuery(getPartners, { variables: { search: '' }, suspend: false });
  if (loading) return null;
  if (error) return `Error! ${error.message}`;
  const linkEntity = useMutation(
    gql`
      mutation link_entity($base_entity_id: Int, $base_entity_name: String, $link_entity_id: Int, $link_entity_name: String, $remove: Boolean){
        link_entity(base_entity_id: $base_entity_id, base_entity_name: $base_entity_name, link_entity_id: $link_entity_id, link_entity_name: $link_entity_name, remove: $remove) {
          name
        }
      }
    `,
  );
  console.log(alreadySelectedEntities);
  return (
    <Fragment>
      <Background to={parentRoute} />
      <Dialogue>
        <ul>
          {
            generateEntities(parentId, data.partners, alreadySelectedEntities, linkEntity, refetchQueries)
          }
        </ul>
      </Dialogue>
    </Fragment>
  );
};
