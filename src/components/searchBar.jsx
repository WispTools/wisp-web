"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
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
}
