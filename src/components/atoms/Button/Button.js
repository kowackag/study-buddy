import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px;
  padding: 7px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
`;
