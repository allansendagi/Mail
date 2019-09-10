import React from 'react';
import {shallow, configure} from 'enzyme';
import {NextUpVideo} from '../nextup-video.component';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('NextUpVideo', () => {
  test('renders', () => {
    const wrapper = shallow(<NextUpVideo/>);
    expect(wrapper).toMatchSnapshot();
  });
});