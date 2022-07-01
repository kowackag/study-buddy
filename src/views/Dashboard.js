import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { useStudents } from 'hooks/useStudents';

import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import DashboardHeader from 'components/molecules/DashboardHeader/DashboardHeader';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState();
  const { id } = useParams();
  const { getGroups } = useStudents();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleISOpenStudentsDetails = (id) => {
    setCurrentStudent(id);
    handleOpenModal();
  };

  if (!id && groups.length > 0)
    return <Navigate to={`/dashboard/${groups[0]}`} />;

  return (
    <>
      <DashboardHeader>
        <Title as="h4">{`Group ${id}`}</Title>{' '}
        <nav>
          {groups.map((group, ind) => (
            <Link key={ind} to={`/dashboard/${group}`}>
              {group}
            </Link>
          ))}
        </nav>
      </DashboardHeader>
      <ViewWrapper>
        <UsersList handleISOpenStudentsDetails={handleISOpenStudentsDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>{currentStudent}</Modal>
        ) : null}
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
