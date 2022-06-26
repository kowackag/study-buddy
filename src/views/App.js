import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyle from 'assets/styles/GlobalStyle';

import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './App.styled';
import AddUser from 'views/AddUser';
import Modal from 'components/organisms/Modal/Modal';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Modal />
          <Wrapper>
            <Routes>
              <Route path="/dashboard/:id" element={<Dashboard />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="add-user" element={<AddUser />}></Route>
              <Route exact path="/" element={<Navigate to="/dashboard/A" />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
