"use client";

import "@/style/headerButton.css";
import { useState, useEffect } from "react";

export default function HeaderButton({ icon, name, onClick = () => {} }) {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      const { [icon]: ImportedIcon } = await import("lucide-react");
      setIcon(() => ImportedIcon);
    };
    importIcon();
  }, [icon]);

  return (
    <button name={name} className="headerButton fadeContent" onClick={onClick}>
      {Icon && <Icon />}
    </button>
  );
}

export function HeaderSpacer() {
  return <div className="headerSpacer fadeContent"></div>;
}
