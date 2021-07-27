import React from 'react';
import { shallow } from 'enzyme';
import EmsComponent from './emsComponent';

describe('EmsComponent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EmsComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
