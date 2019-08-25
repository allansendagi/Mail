import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBarHeader from '../sidebar-header.component';


configure({adapter: new Adapter()});
test('renders SideBarHeader', () => {
  const wrapper = shallow(
    <SideBarHeader/>
  );
  expect(wrapper).toMatchSnapshot();
});