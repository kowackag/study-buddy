import React from 'react';
import PropTypes from 'prop-types';
import StyledNewsSection from './NewsSection.styled';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

const NewsSection = () => {
  return (
    <StyledNewsSection>
      <Title>University News feed</Title>
      <ViewWrapper>
        <h3>Lorem</h3>
        <p>lorem</p>
        <Button>click</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem</h3>
        <p>lorem</p>
        <Button>click</Button>
      </ViewWrapper>
      <ViewWrapper>
        <h3>Lorem</h3>
        <p>lorem</p>
        <Button>click</Button>
      </ViewWrapper>
    </StyledNewsSection>
  );
};
NewsSection.propTypes = {};
export default NewsSection;
