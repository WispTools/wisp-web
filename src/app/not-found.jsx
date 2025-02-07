import Link from "next/link";
import { Home } from "lucide-react";

import "@/style/notFound.css";

export default function NotFound() {
  return (
    <div className="notFoundContainer fadeContent">
      <img
        src="/assets/404.svg"
        alt="404 picture (if you're reading this on a 404 page then something is REALLY wrong)"
        draggable="false"
      />
      <h1>Well $#!%, that's a 404</h1>
      <p>The page you are looking for does not exist, or has been removed.</p>
      <Link href="/">
        <Home />
        Bring me home please :(
      </Link>
    </div>
  );
}
