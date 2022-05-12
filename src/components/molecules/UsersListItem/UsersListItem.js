import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

import { Wrapper, Average } from './UsersListItem.styled.js';
import { UserShape } from 'types/index.js';
import { UserContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UserContext);
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
  userData: PropTypes.shape(UserShape)
};

export default UsersListItem;
