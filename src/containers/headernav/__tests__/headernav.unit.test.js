import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HeaderNav from '../headernav.container';


configure({adapter: new Adapter()});
test('renders HeaderNav', () => {
  const wrapper = shallow(
    <HeaderNav />
  );
  expect(wrapper).toMatchSnapshot();
});
