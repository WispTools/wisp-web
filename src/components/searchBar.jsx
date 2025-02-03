"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

import HeaderButton from "./headerButton";

export default function SearchBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSearch = () => {
    const mobileSearch = document.getElementById("mobileSearch");
    mobileSearch.classList.toggle("hidden");
    document.getElementById("homeSearch").blur();
    mobileSearch.querySelector("input").value = "";
  };

  const desktopSearch = () => {
    return (
      <div
        className="homeSearchContainer"
        onClick={() => {
          document.getElementById("homeSearch").focus();
        }}
      >
        <Search />
        <input
          type="search"
          name="Search"
          id="homeSearch"
          placeholder="Search..."
        />
      </div>
    );
  };

  const mobileSearch = () => {
    return (
      <>
        <div id="mobileHeader">
          <HeaderButton icon="Settings" name="Settings" />
          <a href="/" className="logo">
            <img src="/assets/logo/symbol.svg" alt="logo" />
          </a>
          <HeaderButton icon="Search" name="Search" onClick={toggleSearch} />
        </div>
        <div className="homeSearchContainer hidden" id="mobileSearch">
          <div className="mobileSearchContainer">
            <HeaderButton icon="Search" name="Search" />
            <input
              type="search"
              name="Search"
              id="homeSearch"
              placeholder="Search..."
            />
            <HeaderButton icon="X" name="X" onClick={toggleSearch} />
          </div>
        </div>
      </>
    );
  };

  return <>{isMobile ? mobileSearch() : desktopSearch()}</>;
}
