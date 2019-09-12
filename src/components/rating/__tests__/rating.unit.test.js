import React from 'react';
import {shallow, configure} from 'enzyme';
import {Rating} from '../rating.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Rating', () => {
  test('renders', () => {
    const wrapper = shallow(<Rating/>);
    expect(wrapper).toMatchSnapshot();
  });
});