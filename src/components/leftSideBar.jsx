"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Settings,
  Heart,
  Github,
  GitPullRequestArrow,
  History,
} from "lucide-react";

import Logo from "./logo";

import "@/style/sideBars.css";

export default function LeftSideBar() {
  const pathname = usePathname();
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
          <Link className={getLinkClass("/")} href="/">
            <Home />
            <span className="linkName">Home</span>
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/favorites")} href="/favorites">
            <Heart />
            <span className="linkName">Favorites</span>
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/recent")} href="/recent">
            <History />
            <span className="linkName">Recent</span>
          </Link>
        </li>
      </ul>
      <ul className="sideBarLinkContainer sideBarFooter">
        <li>
          <Link className={getLinkClass("/settings")} href="/settings">
            <Settings />
            <span className="linkName">Settings</span>
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/contribute")} href="/contribute">
            <GitPullRequestArrow />
            <span className="linkName">Contributing</span>
          </Link>
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
