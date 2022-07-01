import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  StyledNewsSection,
  TitleWrapper,
} from './NewsSection.styled';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

import axios from 'axios';
const key = 'e3f5316d59aa8455911f0b5948de5a';

// const key = process.env.REACT_APP_DATOCMS_TOKEN
console.log(process.env.REACT_APP_DATOCMS_TOKEN);
const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log(process.env.REACT_APP_DATOCMS_TOKEN);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `{
      allArticles {
        id
        title
        category
        content
        image {
          url
        }
      }
    }`,
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledNewsSection>
      <Title>University News feed</Title>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ViewWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt={title} /> : null}
            </ContentWrapper>
            <Button isBig>Click</Button>
          </ViewWrapper>
        ))
      ) : (
        <h4>Loading...</h4>
      )}
    </StyledNewsSection>
  );
};
NewsSection.propTypes = {};
export default NewsSection;
