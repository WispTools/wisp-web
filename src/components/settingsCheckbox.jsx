"use client";

import { useEffect, useState } from "react";

export default function SettingsCheckbox({ settingName, refresh = false }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(settingName);
    if (storedValue !== null) {
      setChecked(storedValue === "true");
    }
  }, [settingName]);

  const onChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    localStorage.setItem(settingName, isChecked);
    if (refresh) {
      window.location.reload();
    }
  };

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
