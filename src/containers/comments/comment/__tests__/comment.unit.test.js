import React from 'react';
import {shallow} from 'enzyme';
import {Comment, configure} from '../comment.container';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Comment', () => {
  test('renders Comment', () => {
    const wrapper = shallow(<Comment/>);
    expect(wrapper).toMatchSnapshot();
  });
})