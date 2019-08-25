import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SideBarFooter} from '../sidebar-footer.component';


configure({adapter: new Adapter()});
test('renders SideBarFooter', () => {
  const wrapper = shallow(
    <SideBarFooter/>
  );
  expect(wrapper).toMatchSnapshot();
});