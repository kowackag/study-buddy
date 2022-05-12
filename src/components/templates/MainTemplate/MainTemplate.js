import React from 'react';

import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styled';
import Nav from 'components/organisms/Nav/Nav';

import NewsSection from 'components/organisms/NewsSection/NewsSection';
import SearchBar from 'components/organisms/SearchBar/SearchBar';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SearchBar />
      <Nav />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
