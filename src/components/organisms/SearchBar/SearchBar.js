import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StyledSearchBar, { FieldWrapper } from './SearchBar.styled';

import { Input } from 'components/atoms/Input/Input.styled';
import { useStudents } from 'hooks/useStudents';
import SearchResult from 'components/molecules/SearchResult/SearchResult';

const SearchBar = () => {
  const [text, setText] = useState('');
  const { allStudents } = useStudents();
  console.log(allStudents);
  const matchingStudents = allStudents.filter(({ name }) =>
    name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <StyledSearchBar>
      <div>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <FieldWrapper>
        <Input onChange={(e) => setText(e.target.value)} />
        {text && matchingStudents.length > 0 && (
          <SearchResult>
            {matchingStudents.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </SearchResult>
        )}{' '}
      </FieldWrapper>
    </StyledSearchBar>
  );
};
SearchBar.propTypes = {};
export default SearchBar;
