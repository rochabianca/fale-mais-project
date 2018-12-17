import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../testUtils";
import Form from "./Form";

const defaultProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Form {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "input-component");
  expect(inputComponent.length).toBe(1);
});
