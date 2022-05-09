import React from 'react';
// import PropTypes from 'prop-types';
import StyledButton from './DeleteButton.styled';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icons.svg';

const DeleteButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};
DeleteButton.propTypes = {};
export default DeleteButton;
