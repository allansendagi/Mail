import React from 'react';
import {shallow, configure} from 'enzyme';
import {VideoMetadata} from '../video-metadata.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('VideoMetadata', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoMetadata/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with view count', () => {
    const wrapper = shallow(<VideoMetadata viewCount={100234}/>);
    expect(wrapper).toMatchSnapshot();
  });
});