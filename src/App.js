import React, {Component} from 'react';
import {Watch} from './containers/watch/watch.component';
import Home from './containers/home/home.component';
import {AppLayout} from './components/app-layout/app-layout.component';
import './containers/home/home.styles.scss'
import {Route, Switch, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';

const API_KEY = 'AIzaSyC6phn9QVZ-AmbLI1OWrK9WMvuvnrdaQ-A';


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
 componentDidMount() {
 	this.loadYoutubeApi();
 }
 loadYoutubeApi() {
 	const script = document.createElement('script');
 	script.src = 'https://apis.google.com/js/client.js';

 	script.onload = () => {
 		window.gapi.load('client', () => {
 			window.gapi.client.setApiKey(API_KEY);
 			window.gapi.client.load('youtube', 'v3', () => {
 				this.props.youtubeLibraryLoaded();
 			});
 		});
 	}
 	document.body.appendChild(script);
 }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
