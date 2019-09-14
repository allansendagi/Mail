import {VideoInfoBox} from '../video-infobox.component';
import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('VideoInfoBox', () => {
  test('renders collapsed', () => {
    const wrapper = shallow(<VideoInfoBox/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders expanded', () => {
    const wrapper = shallow(<VideoInfoBox/>);
    wrapper.setState({collapsed: false});
    expect(wrapper).toMatchSnapshot();
  });
});