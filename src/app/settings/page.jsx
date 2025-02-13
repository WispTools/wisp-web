import MobileHeader from "@/components/mobileHeader";
import BackButton from "@/components/backButton";
import Modal from "@/components/modal";
import { HeaderSpacer } from "@/components/headerButton";
import Logo from "@/components/logo";

export default function Settings() {
  return (
    <>
      <MobileHeader>
        <BackButton />
        <a href="/" className="logo">
          <Logo size={"48px"} />
        </a>
        <HeaderSpacer />
      </MobileHeader>
      <div className="fadeContent">
        <h4>Send Analytics</h4>
        <p>
          Wisp uses Vercel analytics to track some basic info like visitors and
          page views. If you want more explanations on how it works you can read
          more in the privacy policy.
        </p>
        <hr />
        <h4>Report a bug</h4>
        <p>If you find a bug or have a suggestion you can report it here.</p>
        <h4>Request a feature</h4>
        <p>
          If you would like a feature to be added to Wisp you can request it
          here.
        </p>
        <hr />
        <h4>Privacy Policy</h4>
        <p>
          We don't collect any data from you, all data is stored in your browser
          local storage.
        </p>
        <h4>Credits</h4>
        <p>View every module's contributors.</p>
      </div>
      <Modal modalTitle="testModal">
        <p>Yo check out my cool modal</p>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
        <h1>GIANT TETX</h1>
      </Modal>
    </>
  );
}
