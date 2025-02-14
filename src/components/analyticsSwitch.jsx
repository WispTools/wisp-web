"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

export default function AnalyticsSwitch() {
  let sendAnalytics;
  useEffect(() => {
    sendAnalytics = localStorage.getItem("sendAnalytics");
  }, []);

  if (sendAnalytics === null) {
    localStorage.setItem("sendAnalytics", "true");
    return <Analytics />;
  }

  if (sendAnalytics === "true") {
    return <Analytics />;
  }

  return null;
}
