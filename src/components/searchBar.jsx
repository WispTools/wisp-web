"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

import HeaderButton from "./headerButton";

export default function SearchBar() {
  const [isMobile, setIsMobile] = useState(false); // Default to false
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    // Set isMounted to true after the component mounts on the client
    setIsMounted(true);
    // Set the initial value of isMobile based on window.innerWidth
    setIsMobile(window.innerWidth < 1024);

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

  // Render a placeholder or loading state during server-side rendering
  if (!isMounted) {
    return null; // Or return a loading spinner or placeholder
  }

  return <>{isMobile ? mobileSearch() : desktopSearch()}</>;
}
