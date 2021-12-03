import React from "react";

const Select = ({
  input,
  meta,
  label,
  options
}) => (
  <>
    <label>
      {label}
    </label>
    <select {...input}>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
)

export default Select
