import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils';
import ShowTaxes from './ShowTaxes';

const defaultProps = {
  taxes: {
    falemais: 20,
    fixed: 38
  }
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ShowTaxes {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-show-taxes');
  expect(component.length).toBe(1);
});

test('does render a tax if exists a destination for the input origin', () => {
  const wrapper = setup();
  const Taxes = findByTestAttr(wrapper, 'taxes');
  expect(Taxes.length).toBe(1);
});
