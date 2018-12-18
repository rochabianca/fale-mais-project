import React from 'react';
import PropTypes from 'prop-types';
import './SelectGroup.min.css';

const SelectGroup = ({ name, value, onChange, ddds, label }) => {
  return (
    <div className='selectGroup'>
      <label className='form__label'>{label}</label>
      <select
        className='selectGroup__select'
        name={name}
        value={value}
        onChange={onChange}
      >
        {ddds.map((origin, index) => (
          <option key={index} value={origin}>
            0{origin}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  ddds: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectGroup;
