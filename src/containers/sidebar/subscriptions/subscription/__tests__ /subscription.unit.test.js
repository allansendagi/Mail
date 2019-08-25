import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Subscription} from '../subscription.component';


configure({adapter: new Adapter()});
describe('Subscription', () => {
  test('renders empty subscription', () => {
    const wrapper = shallow(
      <Subscription/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders broadcasting subscription', () => {
    const wrapper = shallow(
      <Subscription broadcasting label='Productioncoder'/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders non-broadcasting subscription with new videos', () => {
    const wrapper = shallow(
      <Subscription amountNewVideos={4} label='Productioncoder'/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});