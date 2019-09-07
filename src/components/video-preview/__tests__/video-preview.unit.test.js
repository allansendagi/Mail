import React from 'react';
import {shallow, configure} from 'enzyme';
import {VideoPreview} from '../video-preview.component';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('VideoPreview', () => {
  test('renders vertically', () => {
    const wrapper = shallow(<VideoPreview/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders horizontally', () => {
    const wrapper = shallow(<VideoPreview horizontal={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});