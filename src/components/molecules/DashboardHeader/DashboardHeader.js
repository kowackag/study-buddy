import React from 'react';
import PropTypes from 'prop-types';
import StyledDashboardHeader from './DashboardHeader.styled';

const DashboardHeader = ({ children }) => {
  return <StyledDashboardHeader>{children}</StyledDashboardHeader>;
};
DashboardHeader.propTypes = {
  children: PropTypes.node,
};
export default DashboardHeader;
