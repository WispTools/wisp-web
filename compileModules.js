const fs = require("fs");
const ProgressBar = require("progress");

console.log("Compiling modules...");

// check to see if distData folder exists, if not, create it
if (!fs.existsSync("src/distData")) {
  fs.mkdirSync("src/distData");
  console.log("Created distData folder");
}

// if file already exists, then delete it
if (fs.existsSync("src/distData/modules.json")) {
  fs.unlinkSync("src/distData/modules.json");
  console.log("Deleted old modules.json file");
}

// check public/modules and fetch the names of each directory and create an array of them
const modules = fs
  .readdirSync("public/modules", { withFileTypes: true })
  .filter((file) => file.isDirectory())
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

console.log("Compiled modules!");
