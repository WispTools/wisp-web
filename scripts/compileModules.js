const fs = require("fs");
const ProgressBar = require("progress");

async function main() {
  console.log("Compiling module data");

  // Check to see if public/modules folder exists, if not, cancel
  if (!fs.existsSync("public/modules")) {
    console.log(
      "public/modules folder not found, please run npm run clone first"
    );
    process.exit();
  }

  // check to see if distData folder exists, if not, create it
  if (!fs.existsSync("src/distData")) {
    fs.mkdirSync("src/distData");
    console.log("Created distData folder");
  }

  // if file already exists, then delete it
  if (fs.existsSync("src/distData/modules.json")) {
    fs.unlinkSync("src/distData/modules.json");
    console.log("Old modules.json file found, this will be overwritten");
  }

  // check public/modules and fetch the names of each directory and create an array of them
  const modules = fs
    .readdirSync("public/modules", { withFileTypes: true })
    .filter((file) => file.isDirectory() && file.name !== ".git")
    .map((dir) => dir.name);

  const bar = new ProgressBar(":bar :current/:total", {
    total: modules.length,
  });
  const moduleData = modules.map((mod) => {
    const info = JSON.parse(
      fs.readFileSync(`public/modules/${mod}/info.json`, "utf-8")
    );
    info.slug = mod;
    bar.tick();
    return info;
  });

  fs.writeFileSync("src/distData/modules.json", JSON.stringify(moduleData));

  console.log(
    "Compiled modules successfully! Data saved to distData/modules.json"
  );

  // check if distData/version.json exists, if not, create it
  if (!fs.existsSync("src/distData/version.json")) {
    fs.writeFileSync(
      "src/distData/version.json",
      JSON.stringify({ webVer: "Dev", modVer: "Dev" })
    );
    console.log("Created distData/version.json");
  }

  const contributors = new Set();
  moduleData.forEach((mod) => {
    (mod.contributors || []).forEach((contributor) =>
      contributors.add(contributor)
    );
  });
  const contributorList = Array.from(contributors);

  const creditsBar = new ProgressBar("  Fetching :bar :current/:total", {
    total: contributorList.length,
    width: 20,
  });

  console.log(contributorList);

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
    "src/distData/credits.json",
    JSON.stringify(credits, null, 2)
  );
}

main();
