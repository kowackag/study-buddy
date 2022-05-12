import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input.styled';

const StyledSearchBar = styled.div`
  padding: 0 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1/2;
  grid-column: 2 /3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin: 0;
  }

  ${Input} {
    margin-left: 20px;
    width: 100%;
    max-width: 400px;
  }
`;

export default StyledSearchBar;
