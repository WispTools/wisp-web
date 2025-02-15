import Contributors from "@/components/contributors";

import "@/style/credits.css";

export default function Credits() {
  return (
    <div className="credits fadeContent">
      <div>
        <span className="creditsLabel">Creator</span>
        <p>Ethan Hazel</p>
        <span className="creditsLabel">Maintainers</span>
        <p>Ethan Hazel</p>
        <span className="creditsLabel">Brand Assets & Design</span>
        <p>Ethan Hazel</p>
        <span className="creditsLabel">License</span>
        <p>GPLv3</p>
        <span className="creditsLabel">Icon Designs</span>
        <a href="https://lucide.dev/" target="_blank">
          Lucide
        </a>
      </div>
      <span className="creditsDivider"></span>
      <div>
        <span className="creditsLabel">Special Thanks</span>
        <p>Elizabeth Grier</p>
        <p>Anthony Frye</p>
        <span className="creditsLabel">Contributors</span>
        <div className="creditsContributors">
          <Contributors />
        </div>
      </div>
    </div>
  );
}
