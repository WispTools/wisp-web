"use client";

import MobileHeader from "@/components/mobile-header";
import BackButton from "@/components/back-button";
import SettingsCheckbox from "@/components/settings-checkbox";
import { HeaderSpacer } from "@/components/header-button";
import Logo from "@/components/logo";
import Transition from "@/components/transition";
import { useRouter } from "next/navigation";

import { SquareArrowOutUpRight } from "lucide-react";

import "@/style/settings/settings.css";

export default function Settings() {
  const router = useRouter();
  const year = new Date().getFullYear();
  return (
    <>
      <MobileHeader>
        <BackButton />
        <a href="/" className="logo">
          <Logo size={"48px"} />
        </a>
        <HeaderSpacer />
      </MobileHeader>
      <div className="settings fadeContent">
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Send Analytics</h4>
            <p>
              Wisp uses Vercel analytics to track some basic info like visitors
              and page views. If you want more explanations on how it works you
              can read more in the privacy policy.
            </p>
          </div>
          <div className="settingsAction">
            <SettingsCheckbox settingName="sendAnalytics" refresh />
          </div>
        </div>
        <hr />
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Request a feature or report a bug</h4>
            <p>
              If you have a feature request or want to report a bug, you can do
              so here through the GitHub issues page. You will need a GitHub
              account to post an issue.
            </p>
          </div>
          <div className="settingsAction">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/WispTools/wisp-modules/issues/new"
                )
              }
            >
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Credits</h4>
            <p>View every module's contributors.</p>
          </div>
          <div className="settingsAction">
            <button onClick={() => Transition(router, "/credits")}>
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Privacy Policy</h4>
            <p>
              View the privacy policy for the Wisp project. This includes what
              information we collect and how we use it.
            </p>
          </div>
          <div className="settingsAction">
            <button onClick={() => Transition(router, "/privacy-policy")}>
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <hr />
        <div className="settingsFooter">
          <p>
            <b>Wisp</b> is an open source project licensed under GPLv3
          </p>
          <p>Copyright &copy; {year} Wisp Contributors</p>
        </div>
      </div>
    </>
  );
}
