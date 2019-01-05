import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { getSearch } from '../../../queries';

const updateSearch = gql`
  mutation updateSearch($search: String) {
    updateSearch(search: $search) @client
  }
`;


const Input = styled.input`
  padding: 5px;
  font-size: 16pt;
  width: calc(100% - 30px);
  max-width: 600px;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

let timeout = 0;

const changeSearch = ({ target: { value } }, changeGlobalSearch, setValue) => {
  setValue(value);
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeGlobalSearch({
      variables: {
        search: value,
      },
    });
  }, 700);
};

const Search = () => {
  const { data, error, loading } = useQuery(getSearch, { suspend: false });
  if (loading) return <div>Loading...</div>;
  if (error) return `Error! ${error.message}`;
  const [value, setValue] = useState('');
  useEffect(() => {
    const { search } = data;
    setValue(search);
  }, []);
  const changeGlobalSearch = useMutation(updateSearch);


  return (
    <Input
      value={value}
      placeholder="Search"
      onChange={event => changeSearch(event, changeGlobalSearch, setValue)}
    />
  );
};

export default Search;
