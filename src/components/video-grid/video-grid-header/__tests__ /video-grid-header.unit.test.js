import React from 'react';
import {shallow, configure} from 'enzyme';
import {VideoGridHeader} from '../video-grid-header.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('VideoGridHeader', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoGridHeader/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with empty string header', () => {
    const wrapper = shallow(<VideoGridHeader title=''/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with title', () => {
    const wrapper = shallow(<VideoGridHeader title='Autos & Vehicles'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
