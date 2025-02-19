"use client";

import { useEffect, useState } from "react";

import Gallery from "@/components/gallery";

import "@/style/home.css";
import "@/style/favorites.css";

export default function Favorites() {
  const [likedModules, setLikedModules] = useState(undefined);
  useEffect(() => {
    const stored = localStorage.getItem("likedModules");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setLikedModules(parsed);
        }
      } catch (e) {
        localStorage.setItem("likedModules", JSON.stringify([]));
        setLikedModules([]);
      }
    }
  }, []);

  if (likedModules === undefined) {
    return (
      <div className="home fadeContent">
        <div className="homeHeader">
          <h3>Your Favorites</h3>
          <h1>Modules you liked!</h1>
          <h3>You have 0 favorite modules</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="home fadeContent">
      <div className="homeHeader">
        <h3>Your Favorites</h3>
        <h1>Modules you liked!</h1>
        <h3>
          You have {likedModules.length} favorite{" "}
          {likedModules.length === 1 ? "module" : "modules"}
        </h3>
      </div>
      <Gallery favoritesQuery={likedModules} />
    </div>
  );
}
