import React from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

import { StyledList } from './UsersList.styled';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ id: id });
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students &&
          students.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
      </StyledList>
    </>
  );
};

export default UsersList;
