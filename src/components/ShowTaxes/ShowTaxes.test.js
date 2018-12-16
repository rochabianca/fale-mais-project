import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils';
import ShowTaxes from './ShowTaxes';

const defaultProps = {
  origin: 11,
  destination: 16,
  minutesGranted: 30,
  minutes: 60
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

test('does not render a tax if does not exist a destination for the input origin', () => {
  const wrapper = setup({
    origin: 17,
    destination: 16,
    minutesGranted: 30,
    minutes: 60
  });
  const Taxes = findByTestAttr(wrapper, 'taxes');
  expect(Taxes.length).toBe(0);
});

test('renders 0 for FaleMaisPlans if the minutes are inside the franchise', () => {});
