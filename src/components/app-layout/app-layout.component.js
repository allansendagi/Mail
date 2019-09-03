import React from 'react';
import './app-layout.styles.scss';
import HeaderNav from '../../containers/headernav/headernav.container';

export function AppLayout(props) {
	return (
		<div className='app-layout'> 
			<HeaderNav/>
			{props.children}
		</div>
	)
}