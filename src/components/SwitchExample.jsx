import React from "react";
import Switch from "react-switch";

function SwitchExample({ checked, onChange }) {
  return (
    <label>
      <Switch onChange={onChange} checked={checked} />
    </label>
  );
}

export default SwitchExample;
