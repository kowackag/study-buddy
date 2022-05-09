import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

import { Wrapper, Average } from './UsersListItem.styled.js';

const UsersListItem = ({
  deleteUser,
  userData: { name, average, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <Average average={average}>{average}</Average>
      <div>
        <p>{name}</p>
        <p>{`attendance: ${attendance}`}</p>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};
export default UsersListItem;
