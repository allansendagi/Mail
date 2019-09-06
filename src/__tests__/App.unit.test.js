import React from 'react';
import App from '../App';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('App', () => {
  test('renders', () => {
    const wrapper = shallow(
      <App/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});