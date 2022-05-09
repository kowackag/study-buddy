import React from 'react';
// import PropTypes from 'prop-types';
import StyledButton from './Button.styled';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icons.svg';

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};
Button.propTypes = {};
export default Button;
