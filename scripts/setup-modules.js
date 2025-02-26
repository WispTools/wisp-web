const fs = require("fs");
const prompt = require("prompt-sync")();

// get webpurge files from temp/.webpurge file
const webpurge = fs.readFileSync("temp/.webpurge").toString().split("\n");

// delete everything in temp/ inside temp/.webpurge file
webpurge.forEach((file) => {
  file = file.trim();
  if (!file) return;
  if (file.startsWith("#")) return; // This isn't fully implemented on the server end yet so please don't use comments right now
  console.log(`> Deleting ${file}`);
  const filePath = `temp/${file}`;
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      fs.rmSync(filePath, { recursive: true });
      console.log(`> Deleted directory ${file}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`> Deleted file ${file}`);
    }
  } else {
    console.log(`> File or directory ${file} does not exist`);
  }
});

fs.rmSync("temp/.webpurge");

console.log("> Deleted temp/.webpurge file");

console.log("> Deleting finished");
console.log("> Moving files");

// Check if public/modules folder exists, if it does, prompt user if they want to overwrite it
["raw-mod", "scripts", "style"].forEach((folder) => {
  if (fs.existsSync(`public/${folder}`)) {
    const overwrite = prompt(
      `\x1b[33mpublic/${folder} folder already exists, do you want to overwrite it? (y/N): \x1b[0m`
    );
    if (overwrite !== "y") {
      console.log("Exiting...");
      console.clear();
      process.exit();
    }
    fs.rmSync(`public/${folder}`, { recursive: true });
    console.log(`> Deleted public/${folder} folder`);
  }
});

// move the temp/ contents into public/modules
fs.readdirSync("temp").forEach((file) => {
  file = file.trim();
  console.log(`> Moving ${file}`);
  fs.renameSync(`temp/${file}`, `public/${file}`);
});
console.log("> Moving finished");
// delete temp/ folder
fs.rmdirSync("temp");
console.log("> Deleted temp folder");

// Rename modules to raw-mod

if (!fs.existsSync("public/raw-mod")) {
  fs.mkdirSync("public/raw-mod");
  console.log("> Created public/raw-mod folder");
}

fs.readdirSync("public/modules").forEach((file) => {
  file = file.trim();
  console.log(`> Renaming ${file}`);
  fs.renameSync(`public/modules/${file}`, `public/raw-mod/${file}`);
});

// delete public/modules folder
fs.rmdirSync("public/modules");
console.log("> Deleted public/modules folder");

console.log("\x1b[32mModules cloned successfully!\x1b[0m");
console.log("Run \x1b[34mnpm run dev\x1b[0m to start the server\n");
