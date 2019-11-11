import React, { useState, useEffect } from 'react';

import Input from '../element/Input';

const Field = ({
  type,
  labelText,
  name,
  value,
  setValue,
  textValidation,
  validate
}) => {
  const [text, setText] = useState(value);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    setValue(text);
  }, [text, setValue]);

  useEffect(() => {
    if (validate) {
      if (text && text.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(true);
    }
  }, [text, validate]);

  const labelStyle =
    'block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 ';
  const inputStyle =
    'appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white capitalize';
  const inputErrorStyle =
    'appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-red-500';
  const errorMessageStyle = 'text-red-500 text-xs italic';

  return (
    <div>
      {labelText && (
        <label className={labelStyle} htmlFor={name}>
          {labelText}
        </label>
      )}
      <Input
        className={isValid ? inputStyle : inputErrorStyle}
        type={type}
        placeHolder={name}
        ariaLabel={name}
        name={name}
        value={text}
        setValue={setText}
      />
      {!isValid && <p className={errorMessageStyle}>{textValidation}</p>}
    </div>
  );
};

export default Field;
