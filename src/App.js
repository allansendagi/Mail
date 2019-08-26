import React from 'react';

import HeaderNav from './containers/headernav/headernav.container';

import  SideBar  from './containers/sidebar/sidebar.component';
import { Home } from './containers/home/home.component';
import './containers/home/home.styles.scss'

function App() {
  return (
    <div >
    	<HeaderNav />
    	<SideBar />
    	<home />
    </div>
  );
}

export default App;
