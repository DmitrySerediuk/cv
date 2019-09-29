import React from 'react';
import Container from '@material-ui/core/Container';


import Contacts from './Contacts';
import Langs from './Langs';
import Name from './Name';

function HeaderInfo() {
  return (
    <Container>
        <Name/>
        <Langs/>
        <Contacts/>
    </Container>
  );
}

export default HeaderInfo;
