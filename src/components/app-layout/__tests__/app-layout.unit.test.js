import React from 'react';
import {shallow, configure} from 'enzyme';
import {AppLayout} from '../app-layout.component';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
test('renders empty <AppLayout/>', () => {
  const wrapper = shallow(
    <AppLayout/>
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders <AppLayout/> with one child', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child 1</div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});

test('renders <AppLayout/> with children', () => {
  const wrapper = shallow(
    <AppLayout>
      <div>Child</div>
      <div>
        <span>Child</span>
        <p>Child</p>
      </div>
    </AppLayout>
  );
  expect(wrapper).toMatchSnapshot();
});