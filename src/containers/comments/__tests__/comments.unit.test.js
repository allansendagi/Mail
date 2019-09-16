import React from 'react';
import {shallow, configure} from 'enzyme';
import {Comments} from '../comments.container';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Comments', () => {
  test('renders without props', () => {
    const wrapper = shallow(
      <Comments/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders without amountComments', () => {
    const wrapper = shallow(
      <Comments amountComments={112499}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
