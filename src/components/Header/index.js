import React from 'react';
import Container from '@material-ui/core/Container';

import HeaderPhoto from './HeaderPhoto';
import HeaderInfo from './HeaderInfo';
import HeaderTitle from './HeaderTitle';

import './index.css';


function Header() {
  return (
    <header>
        <HeaderTitle className="header__title"/>
        <div className="header__data">
            <HeaderPhoto className="header__photo"/>
            <HeaderInfo className="header__info"/>
        </div>
    </header>
  );
}

export default Header;
