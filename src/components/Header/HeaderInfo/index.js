import React from 'react';
import Container from '@material-ui/core/Container';

import Title from './Title';
import Contacts from './Contacts';
import Langs from './Langs';
import Summary from './Summary';
import Name from './Name';

function HeaderInfo() {
  return (
    <Container>
        <Title/>
        <Name/>
        <Contacts/>
        <Langs/>
        <Summary/>
    </Container>
  );
}

export default HeaderInfo;
