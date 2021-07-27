import React from 'react';
import { shallow } from 'enzyme';
import ProgressComponent from './progressComponent';

describe('ProgressComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProgressComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
