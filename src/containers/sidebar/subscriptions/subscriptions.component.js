import React from 'react';
import { Subscription } from './subscription/subscription.component';
import { Divider } from 'semantic-ui-react';
import SideBarHeader from '../sidebarheader/sidebar-header.component';




export class Subscriptions extends React.Component {
	render() {
		return(
			 <React.Fragment>
			 	<SideBarHeader title='Subscriptions'/>
		        <Subscription label='MusicChannel' broadcasting/>
		        <Subscription label='Coursea' amountNewVideos={10}/>
		        <Subscription label='TEDx Talks' amountNewVideos={23}/>
		        <Subscription label='Stanford iOS' amountNewVideos={4}/>
		        <Subscription label='Udacity' amountNewVideos={114}/>
		        <Divider/>
			  </React.Fragment>
		);
	}
}