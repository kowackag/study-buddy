import React, { useEffect, useState } from 'react';

import {
  ContentWrapper,
  StyledNewsSection,
  TitleWrapper,
} from './NewsSection.styled';
import { Title } from 'components/atoms/Title/Title';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

import axios from 'axios';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const key = 'e3f5316d59aa8455911f0b5948de5a';

const NewsSection = () => {
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${key}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError(`Sorry, we couldn't load articles for you`);
      });
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
        <h4>{error ? error : 'Loading...'}</h4>
      )}
    </StyledNewsSection>
  );
};

export default NewsSection;
