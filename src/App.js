import React, {Component} from 'react';
import {Watch} from './containers/watch/watch.component';
import { Home } from './containers/home/home.component';
import {AppLayout} from './components/app-layout/app-layout.component';
import './containers/home/home.styles.scss'
import {Route, Switch} from 'react-router-dom';

class App extends Component {
	render() {
  return (
    <AppLayout>
      <Switch>
       <Route path="/watch" component={Watch} />
    	<Route path="/" component={Home} />
      </Switch>
    </AppLayout>
  );
 }
}

export default App;
