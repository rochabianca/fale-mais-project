import React from 'react';

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

export default SelectGroup;
