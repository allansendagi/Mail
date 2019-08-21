import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './sidebaritem.styles.scss';

const SideBarItem = (props) => {
	const highLight = props.highLight ? 'highLight-item' : null;
	return(
		<Menu.Item className={['sidebar-item', highLight].join('')}>
		  <div className='sidebar-item-alignment-conatiner'>
		    <span><Icon size='large' name={props.icon}/> </span>
		    <span>{props.label}</span>
		  </div>
		</Menu.Item>
  );
}

export default SideBarItem;