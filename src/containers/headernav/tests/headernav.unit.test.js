import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from '../headernav.container';


test('renders', () => {
  const wrapper = shallow(
    <HeaderNav />
  );
  expect(wrapper).toMatchSnapshot();
});