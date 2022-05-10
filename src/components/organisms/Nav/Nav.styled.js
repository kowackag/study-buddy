import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;
export const StyledLink = styled(NavLink)`
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  text-align: end;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    width: 15px;
    height: 3px;
    right: -20px;
    top: calc(50% - 1.5px);
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;
