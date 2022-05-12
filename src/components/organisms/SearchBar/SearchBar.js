import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyledSearchBar from './SearchBar.styled';
import FormField from '../../molecules/FormField/FormField';
import { Input } from 'components/atoms/Input/Input.styled';

const SearchBar = () => {
  const [text, setText] = useState();

  return (
    <StyledSearchBar>
      <div>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </div>
      <Input />
    </StyledSearchBar>
  );
};
SearchBar.propTypes = {};
export default SearchBar;
