import React from 'react';
import {shallow, configure} from 'enzyme';
import HomeContent from '../homeContent';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('HomeContent', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeContent/>);
    expect(wrapper).toMatchSnapshot();
  });
});