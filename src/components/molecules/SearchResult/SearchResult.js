import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchResult from './SearchResult.styled';

const SearchResult = ({ children }) => {
  console.log(children);
  return <StyledSearchResult>{children}</StyledSearchResult>;
};
SearchResult.propTypes = {
  children: PropTypes.node,
};
export default SearchResult;
