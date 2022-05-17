import styled from 'styled-components';

export const StyledNewsSection = styled.div`
  padding: 1rem;
  grid-row: 1/3;
  grid-column: 3/4;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  overflow-y: scroll;
  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    margin-left: 35px;
    max-width: 200px;
    object-fit: cover;
  }
`;
