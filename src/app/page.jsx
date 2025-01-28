import SearchBar from "@/components/searchBar";
import Gallery from "@/components/gallery";
import { Recent } from "@/components/customIcon";

import modules from "@/distData/slugs.json";

import "@/style/home.css";

export default function Home() {
  return (
    <div className="home">
      <SearchBar />
      <div className="homeHeader">
        <h3>Welcome to Wisp!</h3>
        <h1>The Web Interface for Simple Programs</h1>
        <h3>Currently hosting {modules.length} modules</h3>
      </div>
      <Gallery />
    </div>
  );
}
