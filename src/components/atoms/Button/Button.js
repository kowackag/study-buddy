import React from 'react';
// import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icons.svg';

const name = () => {
  return (
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  );
};
name.propTypes = {};
export default name;
