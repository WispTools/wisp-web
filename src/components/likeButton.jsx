"use client";

import { useState, useEffect } from "react";
import HeaderButton from "./headerButton";
import "@/style/likeButton.css";

export default function LikeButton({ slug }) {
  const [likedModules, setLikedModules] = useState([]);

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

  const isLiked = likedModules.includes(slug);

  const toggleLike = () => {
    const updatedModules = isLiked
      ? likedModules.filter((item) => item !== slug)
      : [...likedModules, slug];

    setLikedModules(updatedModules);
    localStorage.setItem("likedModules", JSON.stringify(updatedModules));
  };

  return (
    <div className={`likeButton${isLiked ? " liked" : ""}`}>
      <HeaderButton icon="Heart" onClick={toggleLike} name="favorite" />
    </div>
  );
}
