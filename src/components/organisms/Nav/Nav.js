import React from 'react';

import { StyledNav, Logo, StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/dashboard/A">DashBoard</StyledLink>
      <StyledLink to="add-user">Add User</StyledLink>
      <StyledLink to="/*">Settings</StyledLink>
      <StyledLink to="/*">Logout</StyledLink>
    </StyledNav>
  );
};

export default Nav;
