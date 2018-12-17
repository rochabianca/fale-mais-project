import React from 'react';
import PropTypes from 'prop-types';

const SelectGroup = ({ name, value, onChange, ddds }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {ddds.map((origin, index) => (
        <option key={index} value={origin}>
          0{origin}
        </option>
      ))}
    </select>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  ddds: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectGroup;
