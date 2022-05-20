import styled from 'styled-components';

const StyledSearchResult = styled.ul`
  position: absolute;
  margin: 0 0 0 20px;
  padding: 0;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 20px;
  list-style: none;
  line-height: 2;
  background-color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  overflow-y: scroll;

  & :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }

  & li {
    padding: 0.4rem;
    cursor: pointer;
  }
`;
export default StyledSearchResult;
