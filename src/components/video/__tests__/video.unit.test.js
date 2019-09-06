import React from 'react';
import {Video} from '../video.component';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
test('renders video component correctly', () => {
  const wrapper = shallow(
    <Video id='HAuXJVI_bUs'/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders null if id in video component not specified', () => {
  const wrapper = shallow(
    <Video/>
  );
  expect(wrapper).toMatchSnapshot();
});