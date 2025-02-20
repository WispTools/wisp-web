const fs = require("fs");
const ProgressBar = require("progress");

async function main() {
  console.log("Compiling module data");

  // Check to see if public/raw-mod folder exists, if not, cancel
  if (!fs.existsSync("public/raw-mod")) {
    console.log(
      "public/raw-mod folder not found, please run npm run clone first"
    );
    process.exit();
  }

  // check to see if dist-data folder exists, if not, create it
  if (!fs.existsSync("src/dist-data")) {
    fs.mkdirSync("src/dist-data");
    console.log("Created dist-data folder");
  }

  // if file already exists, then delete it
  if (fs.existsSync("src/dist-data/modules.json")) {
    fs.unlinkSync("src/dist-data/modules.json");
    console.log("Old modules.json file found, this will be overwritten");
  }

  // check public/raw-mod and fetch the names of each directory and create an array of them
  const modules = fs
    .readdirSync("public/raw-mod", { withFileTypes: true })
    .filter((file) => file.isDirectory() && file.name !== ".git")
    .map((dir) => dir.name);

  const modBar = new ProgressBar("  Fetching Modules :bar :current/:total", {
    total: modules.length,
    width: 20,
  });
  const moduleData = modules.map((mod) => {
    const info = JSON.parse(
      fs.readFileSync(`public/raw-mod/${mod}/info.json`, "utf-8")
    );
    info.slug = mod;
    modBar.tick();
    return info;
  });

  fs.writeFileSync("src/dist-data/modules.json", JSON.stringify(moduleData));

  console.log(
    "Compiled modules successfully! Data saved to dist-data/modules.json"
  );

  // check if dist-data/version.json exists, if not, create it
  if (!fs.existsSync("src/dist-data/version.json")) {
    fs.writeFileSync(
      "src/dist-data/version.json",
      JSON.stringify({ webVer: "Dev", modVer: "Dev" })
    );
    console.log("Created dist-data/version.json");
  }

  const contributors = new Set();
  moduleData.forEach((mod) => {
    (mod.contributors || []).forEach((contributor) =>
      contributors.add(contributor)
    );
  });
  const contributorList = Array.from(contributors);

  const creditsBar = new ProgressBar(
    "  Fetching Contributors :bar :current/:total",
    {
      total: contributorList.length,
      width: 20,
    }
  );

  const credits = [];

  for (const contributor of contributorList) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${contributor}`
      );
      const data = await response.json();
      if (data.name === null) {
        credits.push([contributor, contributor]);
      } else {
        credits.push([data.name, contributor]);
      }
      creditsBar.tick();
    } catch (error) {
      console.error(error);
    }
  }

  fs.writeFileSync(
    "src/dist-data/credits.json",
    JSON.stringify(credits, null, 2)
  );
}

main();
