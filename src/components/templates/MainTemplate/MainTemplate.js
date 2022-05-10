import React from 'react';

import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styled';
import Nav from 'components/organisms/Nav/Nav';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
