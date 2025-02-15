"use client";

import MobileHeader from "@/components/mobileHeader";
import BackButton from "@/components/backButton";
import SettingsCheckbox from "@/components/settingsCheckbox";
import { HeaderSpacer } from "@/components/headerButton";
import Logo from "@/components/logo";
import Transition from "@/components/transition";
import { useRouter } from "next/navigation";

import { SquareArrowOutUpRight } from "lucide-react";

import "@/style/settings.css";

export default function Settings() {
  const router = useRouter();
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
            <SettingsCheckbox settingName="sendAnalytics" />
          </div>
        </div>
        <hr />
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Report a bug</h4>
            <p>
              If you find a bug or have a suggestion you can report it here.
            </p>
          </div>
          <div className="settingsAction">
            <button>
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Request a feature</h4>
            <p>
              If you would like a feature to be added to Wisp you can request it
              here.
            </p>
          </div>
          <div className="settingsAction">
            <button>
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
        <hr />
        <div className="settingsContainer">
          <div className="settingsInfo">
            <h4>Privacy Policy</h4>
            <p>
              We don't collect any data from you, all data is stored in your
              browser local storage.
            </p>
          </div>
          <div className="settingsAction">
            <button>
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
            <button onClick={() => Transition(router, "/settings/credits")}>
              <SquareArrowOutUpRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
