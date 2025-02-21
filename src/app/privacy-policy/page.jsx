import Link from "next/link";

import Logo from "@/components/logo";
import MobileHeader from "@/components/mobile-header";
import { HeaderSpacer } from "@/components/header-button";
import BackButton from "@/components/back-button";

import { FileDown } from "lucide-react";

import "@/style/privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <>
      <MobileHeader>
        <BackButton />
        <a href="/" className="logo">
          <Logo size={"48px"} />
        </a>
        <HeaderSpacer />
      </MobileHeader>
      <div className="privacyPolicy fadeContent">
        <div className="header">
          <h1>Privacy Policy for Wisp</h1>
          <h3 style={{ color: "var(--secondary-color)" }}>
            Effective Date: February 20, 2025
          </h3>
        </div>

        <div className="policySection">
          <p>
            Welcome to Wisp (the "Service"), provided by its{" "}
            <Link href="/credits" target="_blank">
              maintainers
            </Link>{" "}
            ("we," "us," or "our"). We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard
            information through our website and services (accessible via{" "}
            <strong>wisp.tools</strong>, <strong>www.wisp.tools</strong>, and{" "}
            <strong>wisptools.vercel.app</strong>). By using Wisp, you agree to
            the practices described below.
          </p>
        </div>

        <div className="policySection">
          <h2>1. Information We Collect</h2>
          <p>
            We collect non-personally identifiable analytics to improve your
            experience. This includes:
          </p>
          <ul>
            <li>
              <strong>Pages visited</strong> on Wisp.
            </li>
            <li>
              <strong>URLs</strong> used to access the Service (e.g.,
              wisp.tools, www.wisp.tools, wisptools.vercel.app).
            </li>
            <li>
              <strong>Referrers</strong> (the website or link that directed you
              to Wisp).
            </li>
            <li>
              <strong>Country</strong> of access (approximate location based on
              IP, not precise GPS).
            </li>
            <li>
              <strong>Device type</strong> (e.g., Desktop, Mobile).
            </li>
            <li>
              <strong>Browser</strong> and <strong>operating system</strong>{" "}
              used.
            </li>
          </ul>
          <h3>Local Storage</h3>
          <p>
            Your <strong>favorite modules</strong> are stored <em>locally</em>{" "}
            on your browser via Local Storage. This data is <em>never</em>{" "}
            transmitted to our servers or accessible to us.
          </p>
        </div>

        <div className="policySection">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To analyze trends and optimize performance.</li>
            <li>To troubleshoot technical issues.</li>
            <li>
              To enhance user experience (e.g., device-specific formatting).
            </li>
          </ul>
          <p>
            We <strong>do not</strong> use this data to identify individuals.
          </p>
        </div>

        <div className="policySection">
          <h2>3. Your Choices</h2>
          <p>
            You can <strong>opt out of all analytics collection</strong> at any
            time via Wisp's settings.
          </p>
          <ul>
            <li>
              Local Storage data (e.g., favorites) can be cleared through your
              browser settings.
            </li>
          </ul>
        </div>

        <div className="policySection">
          <h2>4. Data Sharing and Sale</h2>
          <p>
            We <strong>never sell, rent, or trade</strong> your data. The
            information we collect is not personally identifiable or
            commercially valuable to third parties, and even if it was we would
            not choose to ever sell this information.
          </p>
        </div>

        <div className="policySection">
          <h2>5. Open Source Transparency</h2>
          <p>
            Wisp is fully open source. You may review, audit, or contribute to
            our codebase at{" "}
            <Link href="https://github.com/WispTools" target="_blank">
              <strong>github.com/WispTools</strong>
            </Link>
            .
          </p>
        </div>

        <div className="policySection">
          <h2>6. Contact Us</h2>
          <p>
            For questions, concerns, or opt-out assistance, contact the head
            maintainer (Ethan Hazel) directly:
          </p>
          <ul>
            <li>
              <strong>Email</strong>:{" "}
              <Link href="mailto:contact@ehazel.com">contact@ehazel.com</Link>
            </li>
          </ul>
        </div>

        <div className="policySection">
          <h2>7. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted on this page with a revised <em>Effective Date</em>.
          </p>
        </div>

        <div className="policyFooter policySection">
          <Logo size={"36px"} />
          <p>
            <strong>Thank you for trusting Wisp.</strong>
            <br />
            Your privacy matters to us.
          </p>
          <Link
            href="/privacy-policy.pdf"
            className="linkButton"
            download="privacy-policy.pdf"
          >
            <FileDown />
            <p>Download our Privacy Policy</p>
          </Link>
        </div>
      </div>
    </>
  );
}
