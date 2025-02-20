import credits from "@/dist-data/credits.json";

export default function Contributors() {
  return (
    <>
      {credits.map((contributor, index) => (
        <a
          key={index}
          href={`https://github.com/${contributor[1]}`}
          target="_blank"
          className="creditsContributorName"
        >
          {contributor[0]}
        </a>
      ))}
    </>
  );
}
