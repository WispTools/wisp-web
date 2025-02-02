"use client";

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const goBack = () => {
    // go home
    window.location.href = "/";
  };

  return (
    <button name="back" className="modActionButton" onClick={goBack}>
      <ArrowLeft />
    </button>
  );
}
