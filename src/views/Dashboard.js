import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { useStudents } from 'hooks/useStudents';

import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import DashboardHeader from 'components/molecules/DashboardHeader/DashboardHeader';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { id } = useParams();
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

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
        <UsersList />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
