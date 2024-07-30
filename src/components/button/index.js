import React from "react";
import "./styles.css";

export default function Button({ value, className, handleClick }) {
  return (
    <input
      type="button"
      value={value}
      className={className}
      onClick={handleClick}
    />
  );
}
