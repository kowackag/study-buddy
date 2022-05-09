import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from 'data/users';
import styled from 'styled-components';
import Form from 'components/organisms/Form/Form';
import Nav from 'components/molecules/Nav/Nav';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fa;
`;

function App() {
  const initialFormData = {
    name: '',
    attendance: '',
    average: '',
  };
  const [formValues, setFormValues] = useState(initialFormData);
  const [users, setUsers] = useState(usersData);
  const changeValue = (e) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setFormValues({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    setUsers([...users, formValues]);
    setFormValues({
      name: '',
      attendance: '',
      average: '',
    });
  };

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <Wrapper>
        <Nav />
        <Routes>
          <Route
            path="/*"
            element={<UsersList users={users} deleteUser={deleteUser} />}
          ></Route>
          <Route
            path="add-user"
            element={
              <Form
                changeValue={changeValue}
                handleAddUser={handleAddUser}
                formValues={formValues}
              />
            }
          ></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
