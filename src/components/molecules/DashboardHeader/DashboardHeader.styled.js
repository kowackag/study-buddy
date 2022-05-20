import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDashboardHeader = styled.div`
  display: flex;
  align-items: center;

  nav a {
    margin-left: 20px;
    display: inline-block;
    text-align: center;
    background-color: white;
    border-radius: 50px;
    padding: 5px;
    width: 30px;
    height: 30px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
  }
  
`;
export default StyledDashboardHeader;
