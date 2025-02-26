"use client";

import HeaderButton from "@/components/header-button";
import { CreateModal } from "@/components/create-modal";

import "@/style/mod-page/info.css";

export default function InfoButton({ module }) {
  return (
    <HeaderButton
      icon="Info"
      name="info"
      onClick={() => {
        CreateModal(
          "Module Info",
          <div className="infoModal">
            <div className="infoLabel">Module Name:</div>
            <div className="infoHeader">
              <div className="infoName">{module.name}</div>
              <div className="infoLink">/mod/{module.slug}</div>
            </div>
            <hr />
            <div className="infoLabel">Module Description:</div>
            <div className="infoDescription">{module.description}</div>
            <div className="infoLabel">Module Attributions:</div>
            <div className="infoAttributions">
              {module.attributions || "None"}
            </div>
            <hr />
            <div className="infoLabel">Module Contributors:</div>
            <div className="infoContributorContainer">
              {module.contributors.map((contributor) => (
                <a
                  className="infoContributor"
                  href={`https://github.com/${contributor}`}
                  target="_blank"
                >
                  @{contributor}
                </a>
              ))}
            </div>
            <div className="infoLabel">Module Keywords:</div>
            <div className="infoKeywordContainer">
              {module.keywords.map((keyword) => (
                <div className="infoKeyword">{keyword}</div>
              )) || <p>None</p>}
            </div>
          </div>
        );
      }}
    />
  );
}
