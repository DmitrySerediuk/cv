import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './index.css';

import Summary from './Summary';
import Skills from './Skills';
import Porfolio from './Porfolio';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';


export default function Content() {

  return (
    <content>
      <Summary/>
      <Skills/>
      <Education/>
      <Experience/>
      {/* <Languages/> */}
      <Porfolio/>
    </content>
  );
}