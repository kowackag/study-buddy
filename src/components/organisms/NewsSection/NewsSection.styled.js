import styled from 'styled-components';

const StyledNewsSection = styled.div`
  padding: 1rem;
  grid-row: 1/3;
  grid-column: 3/4;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export default StyledNewsSection;
