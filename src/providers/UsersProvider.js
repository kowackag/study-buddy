import React, { useState } from 'react';
import { users as usersData } from 'data/users';

export const UserContext = React.createContext({
  users: [],
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleAddUser = (formValues) => {
    setUsers([...users, formValues]);
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <UserContext.Provider value={{ users, deleteUser, handleAddUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;
