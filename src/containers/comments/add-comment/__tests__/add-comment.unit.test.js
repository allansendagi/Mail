import React from 'react';
import {shallow, configure} from 'enzyme';
import {AddComment} from '../add-comment.container';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('AddComment', () => {
  test('AddComment renders correctly', () => {
    const wrapper = shallow(
      <AddComment/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});