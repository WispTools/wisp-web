"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export default function AnalyticsSwitch() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const sendAnalytics = localStorage.getItem("sendAnalytics");

    if (sendAnalytics === null) {
      localStorage.setItem("sendAnalytics", "true");
      setShowAnalytics(true);
      console.log("Analytics enabled (default)");
    } else {
      const shouldShow = sendAnalytics === "true";
      setShowAnalytics(shouldShow);
      console.log(`Analytics ${shouldShow ? "enabled" : "disabled"}`);
    }
  }, []);

  return showAnalytics ? <Analytics /> : null;
}
