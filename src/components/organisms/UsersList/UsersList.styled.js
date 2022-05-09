import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  background-color: white;
`;
export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
