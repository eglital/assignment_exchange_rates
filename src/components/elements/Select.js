import React from 'react';

const Select = props => {
  const { options, ...restOfProps } = props;
  const optionElements = options.map(option => (
    <option selected={selected} key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <select className="form-control" {...restOfProps}>
      {optionElements}
    </select>
  );
};

export default Select;