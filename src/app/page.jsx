"use client";

import { useState } from "react";
import SearchBar from "@/components/search-bar";
import Gallery from "@/components/gallery";

import modules from "@/dist-data/modules.json";

import "@/style/home/home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="home">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="homeContent fadeContent">
        <div className="header">
          <h3>Welcome to Wisp!</h3>
          <h1>The Web Interface for Simple Programs</h1>
          <h3>Currently hosting {modules.length} modules</h3>
        </div>
        <Gallery searchQuery={searchQuery} favoritesQuery={false} />
      </div>
    </div>
  );
}
