import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey};
  color: white;

  svg {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

export default StyledDeleteButton;
