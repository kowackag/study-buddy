import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/*">Home</Link>
      <Link to="add-user">Add User</Link>
    </nav>
  );
};
Nav.propTypes = {};
export default Nav;
