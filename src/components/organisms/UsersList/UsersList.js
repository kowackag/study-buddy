import React from 'react';

import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

import { users } from 'data/users';

import { Wrapper, StyledList } from './UsersList.styled';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
