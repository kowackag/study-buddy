import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext({
  users: [],
  deleteUser: () => {},
  handleAddUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

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
