import Link from "next/link";

import {
  CodeXml,
  BookOpen,
  MessageSquare,
  GitPullRequestArrow,
} from "lucide-react";

import "@/style/contribute.css";
import "@/style/home.css";

export default function Contribute() {
  return (
    <div className="contributeContainer fadeContent">
      <div className="contributeCard">
        <h1>Contributing</h1>
        <button className="modLink">
          <span className="modLinkIcon">
            <GitPullRequestArrow />
          </span>
          <div className="modLinkInfo">
            <h3>Your Contribution Here!</h3>
            <p>It's easier than you think, trust me.</p>
          </div>
        </button>
        <p className="contributeCard">
          If you are interested in contributing to Wisp, we would love to have
          you! All you need to know is the basics of JavaScript and HTML. You
          don't need to be an expert programmer, just try your best and if you
          have any problems we will help you out along the way!
        </p>
        <div className="contributeLinks">
          <Link
            href="https://github.com/WispTools"
            target="_blank"
            className="contributeLink"
          >
            <CodeXml />
            Repositories
          </Link>
          <Link href="/docs" target="_blank" className="contributeLink">
            <BookOpen />
            Documentation
          </Link>
          <Link href="/discord" target="_blank" className="contributeLink">
            <MessageSquare />
            Discord
          </Link>
        </div>
      </div>
    </div>
  );
}
