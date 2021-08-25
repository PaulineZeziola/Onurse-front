import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'react-feather';
import './page.scss';

const Header = ({ titlePage }) => (

  <header className="header">
    <Link
      to="/"
      className="home-button"
    >
      <ArrowLeft />
    </Link>
    <div className="header-infos">
      <h1 className="header-title">
        {titlePage}
      </h1>
    </div>
    <Link
      to="/login"
      className="logout-button"
    >
      <LogOut />
    </Link>
  </header>
);

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,

};

export default Header;
