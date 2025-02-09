import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

function PascalCaseToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const iconName =
    PascalCaseToKebabCase(searchParams.get("iconName")) || "circle-help";

  const svgUrl = `https://unpkg.com/lucide-static@latest/icons/${iconName}.svg`;

  try {
    const iconSvg = await fetch(svgUrl).then((res) => res.text());

    const viewBoxMatch = iconSvg.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

    const elementMatches = [
      ...iconSvg.matchAll(
        /<(path|rect|circle|line|polyline|polygon|ellipse)\s([^>]+)\/>/g
      ),
    ];

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#070707",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            color: "#ddd",
          }}
        >
          <svg
            width="130"
            height="130"
            viewBox={viewBox}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {elementMatches.map((match, index) => {
              const tagName = match[1];
              const attributesString = match[2];

              const props = Object.fromEntries(
                [...attributesString.matchAll(/([\w-]+)="([^"]+)"/g)].map(
                  ([, key, value]) => [key, value]
                )
              );

              return React.createElement(tagName, { key: index, ...props });
            })}
          </svg>
        </div>
      ),
      {
        width: 180,
        height: 180,
      }
    );
  } catch (error) {
    console.error("Error fetching or processing SVG:", error);
    return new Response("Error generating image", { status: 500 });
  }
}
