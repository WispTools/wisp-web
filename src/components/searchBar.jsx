"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import MobileHeader from "./mobileHeader";
import HeaderButton from "./headerButton";
import Logo from "./logo";
import Transition from "./transition";

export default function SearchBar({ searchQuery, setSearchQuery }) {
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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const desktopSearch = () => {
    return (
      <div
        className="homeSearchContainer fadeContent"
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
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    );
  };

  const mobileSearch = () => {
    const router = useRouter();
    const pathname = usePathname();
    return (
      <>
        <MobileHeader>
          <HeaderButton
            onClick={() => Transition(router, "/settings", pathname)}
            icon="Settings"
            name="Settings"
          />
          <a href="/" className="logo">
            <Logo size={"48px"} />
          </a>
          <HeaderButton icon="Search" name="Search" onClick={toggleSearch} />
        </MobileHeader>
        <div
          className="homeSearchContainer fadeContent hidden"
          id="mobileSearch"
        >
          <div className="mobileSearchContainer">
            <HeaderButton icon="Search" name="Search" />
            <input
              type="search"
              name="Search"
              id="homeSearch"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
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
