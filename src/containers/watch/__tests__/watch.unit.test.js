import React from 'react';
import {shallow, configure} from 'enzyme';
import {Watch} from '../watch.component';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Watch', () => {
  test('renders', () => {
    const wrapper = shallow(<Watch/>);
    expect(wrapper).toMatchSnapshot();
  });
});