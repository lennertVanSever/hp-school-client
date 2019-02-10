import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const Section = styled.section`
  margin-top: 20px;
`;

const ChildWrapper = styled.div`
  display: float;
  overflow: auto;
  padding-bottom: 2px;
`;

const Title = styled.h1`
  font-size: 20pt;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Subtitle = styled.h3`
  font-size: 14pt;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  margin-left: 10px;
  font-size: 28pt;
`;

const Form = styled.form`
  display: inline;
`;

function generateEntityForm(entity, createEntity, history, match) {
  if (entity) {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          if (entity.method === 'add') {
            createEntity({
              variables: {
                entity: entity.name,
              },
            }).then(({ data: { create_entity: { id } } }) => {
              history.push(`/${entity.name}/${id}`);
            });
          }
          if (entity.method === 'select') {
            history.push(`${match.url}/select/${entity.name}`);
          }
        }}
      >
        <Button>+</Button>
      </Form>
    );
  }
  return null;
}

export default withRouter(({ title, subtitle, children, entity, history, match }) => {
  const createEntity = useMutation(
    gql`
      mutation create_entity($entity: String){
        create_entity(entity: $entity) {
          id
        }
      }
    `,
  );
  return (
    <Section>
      <Title>
        {title}
        {generateEntityForm(entity, createEntity, history, match)}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <ChildWrapper>
        {children}
      </ChildWrapper>
    </Section>
  );
});
