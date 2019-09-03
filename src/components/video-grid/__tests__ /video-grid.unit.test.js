import React from 'react';
import {shallow, configure} from 'enzyme';
import {VideoGrid} from '../video-grid.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('VideoGrid', () => {
  test('renders without props', () => {
    const wrapper = shallow(<VideoGrid/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders with title prop', () => {
    const wrapper = shallow(<VideoGrid title='Trending'/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders without divider', () => {
    const wrapper = shallow(<VideoGrid hideDivider={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});