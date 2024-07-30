import React from "react";
import "./styles.css";

export default function OutputRow({ value, textSise }) {
  return (
    <div>
      <input
        type="text"
        readOnly
        className="screen"
        value={value}
        style={{ textSise }}
      />
    </div>
  );
}
