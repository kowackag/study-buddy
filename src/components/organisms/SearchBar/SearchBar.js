import React, { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';

import { useStudents } from 'hooks/useStudents';
import {
  StyledSearchResult,
  StyledSearchResultItem,
} from 'components/molecules/SearchResult/SearchResult.styled';

import StyledSearchBar, { FieldWrapper } from './SearchBar.styled';
import { Input } from 'components/atoms/Input/Input.styled';
// import SearchResult from 'components/molecules/SearchResult/SearchResult';

const SearchBar = () => {
  const [allStudents, setAllStudents] = useState([]);
  const { getAllStudents } = useStudents();
  const [matchingStudents, setMatchingStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const allStudents = await getAllStudents();
      setAllStudents(allStudents);
    })();
  }, [getAllStudents]);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: allStudents,
    itemToString: (item) => (item ? item.name : ''),
    onInputValueChange: ({ inputValue }) => {
      setMatchingStudents(
        allStudents.filter(({ name }) =>
          name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <StyledSearchBar>
      <div>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <FieldWrapper {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search"
          name="search"
          id="search"
        />
        <StyledSearchResult {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <StyledSearchResultItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </StyledSearchResultItem>
            ))}
        </StyledSearchResult>
      </FieldWrapper>
    </StyledSearchBar>
  );
};

export default SearchBar;
