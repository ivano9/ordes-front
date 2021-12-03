import React from "react";

const Button = ({
  type,
  onClick,
  btnLabel,
  primary,
  disable
}) => (
  <button
    type={type}
    className="button is-success is-light"
    disabled={disable}
    onClick={onClick}
  >
    {btnLabel}
  </button>
)

export default Button
