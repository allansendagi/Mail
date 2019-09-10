import React from 'react';
import {shallow, configure} from 'enzyme';
import {RelatedVideos} from '../related-videos.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('RelatedVideos', () => {
  test('renders', () => {
    const wrapper = shallow(<RelatedVideos/>);
    expect(wrapper).toMatchSnapshot();
  });
});