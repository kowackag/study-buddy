import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from 'assets/styles/GlobalStyle';

import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './App.styled';
import AddUser from 'views/AddUser';
import UsersProvider from 'providers/UsersProvider';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/*" element={<Dashboard />}></Route>
                <Route path="add-user" element={<AddUser />}></Route>
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
