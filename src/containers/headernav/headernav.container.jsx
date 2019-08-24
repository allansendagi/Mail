import React from 'react';
import { Image, Menu, Form, Input,Icon } 

	     from 'semantic-ui-react';
import './headernav.styles.scss';
import logo from '../../assets/images/logo.jpg';

class HeaderNav extends React.Component {
	render() {
		return (
			<Menu borderless className='top-menu' fixed='top'>
			  <Menu.Item header className='logo'>
			  	<Image src={logo} size='tiny'/>
			  </Menu.Item>
			  <Menu.Menu className='nav-container'>
			  	<Menu.Item className='search-input'>
			  	  <Form>
			  	  	<Form.Field>
			  	  	  <Input placeholder='search' 
			  	  	  		 size='small'
			  	  	  		 action='Go'
			  	  	  	 />
			  	    </Form.Field>
			  	  </Form>
			  	</Menu.Item>
			  	<Menu.Menu position='right'>
			  	  	<Menu.Menu>
			  	  	  <Icon className='header-icon' name='video camera' size='large' />
			  	  	  	</Menu.Menu>
			  	  	  	 <Menu.Menu>
			  	  	  	  <Icon className='header-icon' name='grid layout' size='large' />
			  	  	  	  </Menu.Menu>
			  	  	  	 <Menu.Menu>
			  	  	  	 <Icon className='header-icon' name='chat' size='large' />
			  	  	  	</Menu.Menu>
			  	  	  	<Menu.Menu>
			  	  	  	<Icon className='header-icon' name='alarm' size='large' />
			  	  	  </Menu.Menu>
			  	  	 <Menu.Menu name='avatar'>
			  	  	<Image src='http://via.placeholder.com/80x80' avatar/>
			  	 </Menu.Menu>
			  	</Menu.Menu>  
			  </Menu.Menu>
			</Menu>

		)
	}
}

export default HeaderNav;