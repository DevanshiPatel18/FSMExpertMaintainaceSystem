import React from 'react';
import { shallow } from 'enzyme';
import JHComponent from './jhComponent';

describe('JHComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<JHComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
