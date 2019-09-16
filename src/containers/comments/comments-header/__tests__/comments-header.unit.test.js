import React from 'react';
import {shallow, configure} from 'enzyme';
import {CommentsHeader} from '../comments-header.component';
import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});
describe('CommentsHeader', () => {
  test('CommentsHeader renders with props.amountComments = null', () => {
    const wrapper = shallow(
      <CommentsHeader/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('CommentsHeader renders with props.amountComments = 0', () => {
    const wrapper = shallow(
      <CommentsHeader amountComments={123}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});