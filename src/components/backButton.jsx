"use client";

import HeaderButton from "./headerButton";

export default function BackButton() {
  const goBack = () => {
    // go home
    window.location.href = "/";
  };

  return <HeaderButton icon="ArrowLeft" name="Back" onClick={goBack} />;
}
