import MobileHeader from "@/components/mobileHeader";
import { HeaderSpacer } from "@/components/headerButton";
import Contributors from "@/components/contributors";
import Logo from "@/components/logo";
import BackButton from "@/components/backButton";

import "@/style/credits.css";

export default function Credits() {
  return (
    <>
      <MobileHeader>
        <BackButton />
        <a href="/" className="logo">
          <Logo size={"48px"} />
        </a>
        <HeaderSpacer />
      </MobileHeader>
      <div className="credits fadeContent">
        <div>
          <span className="creditsLabel">Creator & Maintainer</span>
          <p>Ethan Hazel</p>
          <span className="creditsLabel">Icon Designs</span>
          <a href="https://lucide.dev/" target="_blank">
            Lucide
          </a>
          <span className="creditsLabel">Special Thanks</span>
          <p>Elizabeth Grier</p>
          <p>Anthony Frye</p>
        </div>
        <span className="creditsDivider"></span>
        <div>
          <span className="creditsLabel">Contributors</span>
          <div className="creditsContributors">
            <Contributors />
          </div>
        </div>
      </div>
    </>
  );
}
