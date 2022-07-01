import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

import { StyledList } from './UsersList.styled';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const UsersList = ({ handleISOpenStudentsDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students &&
          students.map((userData) => (
            <UsersListItem
              key={userData.name}
              userData={userData}
              onClick={() => handleISOpenStudentsDetails(userData.id)}
            />
          ))}
      </StyledList>
    </>
  );
};

export default UsersList;
