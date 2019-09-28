import React from 'react';
import Container from '@material-ui/core/Container';

import HeaderPhoto from './HeaderPhoto';
import HeaderInfo from './HeaderInfo';

import './index.css';


function Header() {
  return (
    <header>
        <HeaderPhoto className="header__photo"/>
        <HeaderInfo className="header__info"/>
    </header>
  );
}

export default Header;
