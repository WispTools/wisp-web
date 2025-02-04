"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Home,
  Settings,
  Heart,
  Github,
  GitPullRequestArrow,
  History,
} from "lucide-react";

import Logo from "./logo";
import Transition from "./transition";

import "@/style/sideBars.css";

export default function LeftSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const getLinkClass = (path) =>
    `sideBarLink${path === pathname ? " active" : ""}`;

  return (
    <div className="leftSideBar">
      <ul className="sideBarLinkContainer">
        <li className="sideBarHeader">
          <Link className="sideBarLogo" href="/">
            <Logo size={"34px"} />
            <img className="title" src="/assets/logo/title.svg" alt="logo" />
          </Link>
        </li>
        <li>
          <button
            className={getLinkClass("/")}
            onClick={() => Transition(router, "/", pathname)}
          >
            <Home />
            <span className="linkName">Home</span>
          </button>
        </li>
        <li>
          <button
            className={getLinkClass("/favorites")}
            onClick={() => Transition(router, "/favorites", pathname)}
          >
            <Heart />
            <span className="linkName">Favorites</span>
          </button>
        </li>
        <li>
          <button
            className={getLinkClass("/recent")}
            onClick={() => Transition(router, "/recent", pathname)}
          >
            <History />
            <span className="linkName">Recent</span>
          </button>
        </li>
      </ul>
      <ul className="sideBarLinkContainer sideBarFooter">
        <li>
          <button
            className={getLinkClass("/settings")}
            onClick={() => Transition(router, "/settings", pathname)}
          >
            <Settings />
            <span className="linkName">Settings</span>
          </button>
        </li>
        <li>
          <button
            className={getLinkClass("/contribute")}
            onClick={() => Transition(router, "/contribute", pathname)}
          >
            <GitPullRequestArrow />
            <span className="linkName">Contributing</span>
          </button>
        </li>
        <li>
          <a
            className="sideBarLink"
            href="https://github.com/WispTools/wisp-web"
            target="_blank"
          >
            <Github />
            <span className="linkName">Source Code</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
