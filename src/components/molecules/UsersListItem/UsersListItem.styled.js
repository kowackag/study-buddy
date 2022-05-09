import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  color: #737c8e;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  & > div {
    margin: 12px;
    & > p:first-child {
      font-weight: bold;
      margin-bottom: 0;
    }
    & > p:last-child {
      font-size: ${({ theme }) => theme.fontSize.s};
      margin-top: 0;
    }
  }
`;

export const Average = styled.div`
  padding: 10px 0;
  margin-right: 24px;
  width: 34px;
  height: 34px;
  border-radius: 25px;
  background-color: ${({ average, theme }) => {
    if (average < 3) {
      return '#CB8581';
    }
    if (average <= 4) {
      return '#E1D888';
    }
    if (Number(average) <= 5) {
      return `${theme.colors.success}`;
    }
  }};
  background: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  letter-spacing: -5%;
  line-height: 14px;
  text-align: center;
  color: white;
`;
