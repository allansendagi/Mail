import React from 'react';
import {HomeContent} from './homeContent/homeContent';

import SideBar from '../sidebar/sidebar.component';

export class Home extends React.Component {
  render() {
    return (
    <React.Fragment>
     <SideBar/>
     <HomeContent/>
    </React.Fragment>
    );
  }
}