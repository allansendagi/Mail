import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBarItem from '../sidebaritem.component';


configure({adapter: new Adapter()});
test('renders SideBarItem', () => {
  const wrapper = shallow(
    <SideBarItem/>
  );
  expect(wrapper).toMatchSnapshot();
});

