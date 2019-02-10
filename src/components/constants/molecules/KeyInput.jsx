import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const Form = styled.form`
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const LabelText = styled.p`
  width: 40%;
  font-size: 14pt;
  max-width: 200px;
`;

const Input = styled.input`
  width: 60%;
  padding: 5px;
  padding-right: 0px;
  box-sizing: border-box;
`;

function save(value, key, type, entity, entityId, updateEntityAction, refetchQueries) {
  updateEntityAction({
    variables: {
      keyValue: {
        value,
        key,
        type,
      },
      entity,
      id: entityId,
    },
    refetchQueries,
  });
}

function generateInput(
  type,
  inputValue,
  setInputValue,
  name,
  originalValue,
  entity,
  entityId,
  updateEntityAction,
  refetchQueries,
) {
  if (type === 'number' || type === 'text') {
    return (
      <Input
        placeholder={type}
        value={inputValue}
        type={type}
        onChange={event => setInputValue(event.target.value)}
        onBlur={({ target: { value } }) => {
          if (value !== originalValue) {
            save(value, name, type, entity, entityId, updateEntityAction, refetchQueries);
          }
        }}
      />
    );
  }
  if (type === 'boolean') {
    return (
      <input
        type="checkbox"
        defaultChecked={inputValue}
        onChange={() => {
          const newValue = !inputValue;
          setInputValue(newValue);
          save(newValue, name, type, entity, entityId, updateEntityAction, refetchQueries);
        }}
      />
    );
  }
  return null;
}

export default ({
  type,
  name,
  labelName,
  value,
  entity,
  entityId,
  refetchQueries,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const updateEntityAction = useMutation(
    gql`
      mutation update_entity($keyValue: keyValue, $entity: String, $id: Int){
        update_entity(keyValue: $keyValue, entity: $entity, id: $id) {
          name
        }
      }
    `,
  );
  return (
    <Form>
      <Label id={name} htmlFor={name}>
        <LabelText>{labelName}</LabelText>
        {generateInput(
          type,
          inputValue,
          setInputValue,
          name,
          value,
          entity,
          entityId,
          updateEntityAction,
          refetchQueries,
        )}
      </Label>
    </Form>
  );
};
