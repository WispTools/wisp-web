"use client";

import { useEffect, useState } from "react";

export default function SettingsCheckbox({ settingName, refresh = false }) {
  const [checked, setChecked] = useState(
    localStorage.getItem(settingName) === "true"
  );
  const adjustSetting = () => {
    localStorage.setItem(settingName, checked);
  };
  const onChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (refresh) {
      window.location.reload();
    }
    adjustSetting();
  };
  useEffect(() => {
    adjustSetting();
  }, [checked]);
  return (
    <div
      className={"settingsCheckboxContainer" + (checked ? " checked" : "")}
      onClick={() => document.getElementById(`checkbox-${settingName}`).click()}
    >
      <input
        id={`checkbox-${settingName}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="settingsCheckboxInput"
        style={{ display: "none" }}
      />
      <span className="settingsCheckboxKnob"></span>
    </div>
  );
}
