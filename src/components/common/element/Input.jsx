import React, { useState, useEffect } from 'react';

const Input = ({
  type,
  name,
  value,
  setValue,
  className,
  placeHolder,
  ariaLabel
}) => {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setText(value);
    setValue(value);
  };
  return (
    <input
      className={className}
      type={type}
      id={name}
      name={name}
      placeholder={placeHolder}
      aria-label={ariaLabel}
      value={text}
      onChange={handleChange}
    />
  );
};

export default Input;
