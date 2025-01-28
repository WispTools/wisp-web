"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Settings,
  Star,
  Github,
  GitPullRequestArrow,
  History,
} from "lucide-react";

import "@/style/sideBars.css";

export default function LeftSideBar() {
  const pathname = usePathname();
  const getLinkClass = (path) =>
    `sideBarLink${path === pathname ? " active" : ""}`;

  return (
    <div className="leftSideBar">
      <ul className="sideBarLinkContainer">
        <li>
          <Link className="sideBarLogo" href="/">
            <img
              className="symbol"
              src="/assets/logo/symbol.svg"
              alt="symbol"
            />
            <img className="title" src="/assets/logo/title.svg" alt="logo" />
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/")} href="/">
            <Home />
            Home
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/favorites")} href="/favorites">
            <Star />
            Favorites
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/recent")} href="/recent">
            <History />
            Recently Used
          </Link>
        </li>
      </ul>
      <ul className="sideBarLinkContainer">
        <li>
          <Link className={getLinkClass("/settings")} href="/settings">
            <Settings />
            Settings
          </Link>
        </li>
        <li>
          <Link className={getLinkClass("/contribute")} href="/contribute">
            <GitPullRequestArrow />
            Contributing
          </Link>
        </li>
        <li>
          <a
            className="sideBarLink"
            href="https://github.com/EthanHazel/wisp"
            target="_blank"
          >
            <Github />
            Source Code
          </a>
        </li>
      </ul>
    </div>
  );
}
