const fs = require("fs");
const ProgressBar = require("progress");

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

const bar = new ProgressBar(":bar :current/:total", { total: modules.length });
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
